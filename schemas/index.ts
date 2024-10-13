import { initSchemas } from "@labs/schemas/validate";

// Schemas
export * as AccessCode from "./access/access-code";
export * as AccessGroup from "./access/access-group";
export * as AccessPoint from "./access/access-point";
export * as Visit from "./access/visit";

export * as Aggregation from "./aggregation/aggregation";

export * as AuthDevice from "./auth/auth-device";
export * as AuthLogin from "./auth/auth-login";
export * as AuthRole from "./auth/auth-role";
export * as AuthSession from "./auth/auth-session";

export * as Brand from "./brand/brand";
export * as LocationGroup from "./brand/location-group";
export * as LocationMembership from "./brand/location-membership";
export * as LocationRoom from "./brand/location-room";
export * as Location from "./brand/location";

export * as CalendarBooking from "./calendar/calendar-booking";
export * as CalendarEventTemplate from "./calendar/calendar-event-template";
export * as CalendarEvent from "./calendar/calendar-event";
export * as Calendar from "./calendar/calendar";

export * as Contract from "./contract/contract";
export * as Suspension from "./contract/suspension";

export * as Document from "./document/document";

export * as Audit from "./interaction/audit";
export * as Email from "./interaction/email";
export * as InteractionTemplate from "./interaction/interaction-template";
export * as Sms from "./interaction/sms";

export * as IotDevice from "./iot/iot-device";

export * as Membership from "./membership/membership";
export * as Promotion from "./membership/promotion";
export * as ReferalCode from "./membership/referal-code";

export * as DebtCollection from "./payments/debt-collection";
export * as DirectDebit from "./payments/direct-debit";
export * as PaymentMethod from "./payments/payment-method";
export * as SettlementReport from "./payments/settlement-report";
export * as Transaction from "./payments/transaction";

export * as Question from "./questionnaire/question";
export * as Questionnaire from "./questionnaire/questionnaire";

export * as Tag from "./tag/tag";
export * as TagItem from "./tag/tag-item";

export * as Note from "./user/note";
export * as User from "./user/user";


initSchemas();