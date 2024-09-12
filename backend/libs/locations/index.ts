import { isActiveContract } from "@labs/contracts";
import * as db from "@labs/be.database";
import { Location } from "@labs/api/locations/types/location";

export async function getLocationMemberAddresses(location: Location, extraFields: string[]) {
  const memberFields = ["memberId", "address", "suburb", "state", "postCode", ...extraFields];
  const contractFields = ["memberId", "membershipName", "status"];
  const [members, contracts] = await Promise.all([
    db.Member.getLocationMembers(location.id, memberFields),
    db.Contract.getLocationContracts(location.id, contractFields)
  ]);

  if (!members || !contracts) return [];

  const memberMap = members.reduce((acc, m) => {
    acc[m.memberId] = m;
    return acc;
  }, {});

  const contractMap = contracts.reduce((acc, c) => {
    if (!isActiveContract(c) || !memberMap[c.memberId]) return acc;
    if (!acc[c.memberId]) acc[c.memberId] = { member: memberMap[c.memberId], contracts: [] };
    acc[c.memberId].contracts.push(c);
    return acc;
  }, {});

  return Object.keys(contractMap).map(key => {
    const c = contractMap[key].contracts[0];
    const m = contractMap[key].member;
    if (location && location.address?.state) location.address?.state.replace(/,/g, " ");
    if (location && location.name) location.name.replace(/,/g, " ");
    return {
      location: location,
      address: m.address?.replaceAll(",", " "),
      suburb: m.suburb?.replaceAll(",", " "),
      state: m.state?.replaceAll(",", " "),
      postCode: `${m.postCode || ""}`,
      email: m.email,
      mobileNumber: m.mobileNumber,
      membership: c.membershipName.toLowerCase().includes("pass") ? "Fitness Passport" : "Plus Fitness",
    };
  });
}