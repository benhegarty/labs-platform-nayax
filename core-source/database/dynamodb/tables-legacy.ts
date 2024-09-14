export const AccessGroupTable = {
  _meta: {
    legacy: true,
    table: "AccessGroup",
    primaryKey: "id",
  },
  byMembershipLocationId: {
    _meta: {
      legacy: true,
      table: "AccessGroup",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
};

export const AccessGroupAccessPointTable = {
  _meta: {
    legacy: true,
    table: "AccessGroupAccessPoint",
    primaryKey: "id",
  },
  byAccessGroup: {
    _meta: {
      legacy: true,
      table: "AccessGroupAccessPoint",
      index: "byAccessGroup",
      primaryKey: "accessGroupId",
    },
  },
};

export const AccessPointTable = {
  _meta: {
    legacy: true,
    table: "AccessPoint",
    primaryKey: "id",
  },
  byAuthToken: {
    _meta: {
      legacy: true,
      table: "AccessPoint",
      index: "byAuthToken",
      primaryKey: "authToken",
    },
  },
  byLocation: {
    _meta: {
      legacy: true,
      table: "AccessPoint",
      index: "byLocation",
      primaryKey: "locationId",
    },
  },
  byApiId: {
    _meta: {
      legacy: true,
      table: "AccessPoint",
      index: "byApiId",
      primaryKey: "apiId",
    },
  },
};

export const AccessPointTimesTable = {
  _meta: {
    legacy: true,
    table: "AccessPointTimes",
    primaryKey: "id",
  },
  byDoorAccessPointId: {
    _meta: {
      legacy: true,
      table: "AccessPointTimes",
      index: "byDoorAccessPointId",
      primaryKey: "accessPointId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "AccessPointTimes",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const ActionNotificationTable = {
  _meta: {
    legacy: true,
    table: "ActionNotification",
    primaryKey: "id",
  },
  byNotificationId: {
    _meta: {
      legacy: true,
      table: "ActionNotification",
      index: "byNotificationId",
      primaryKey: "notificationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "ActionNotification",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const AuditOperationTable = {
  _meta: {
    legacy: true,
    table: "AuditOperation",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "AuditOperation",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const AuditVisitLogTable = {
  _meta: {
    legacy: true,
    table: "AuditVisitLog",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "AuditVisitLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byClickedBy: {
    _meta: {
      legacy: true,
      table: "AuditVisitLog",
      index: "byClickedBy",
      primaryKey: "clickedBy",
      sortKey: "createdAt",
    },
  },
  byType: {
    _meta: {
      legacy: true,
      table: "AuditVisitLog",
      index: "byType",
      primaryKey: "type",
    },
  },
};

export const BatchPaymentTable = {
  _meta: {
    legacy: true,
    table: "BatchPayment",
    primaryKey: "id",
  },
  byToken: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byToken",
      primaryKey: "token",
    },
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byDebitDate",
      primaryKey: "debitDate",
      sortKey: "paymentType",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
  byBatchId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byBatchId",
      primaryKey: "batchId",
      sortKey: "paymentType",
    },
  },
  byUniqueIdentifier: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byUniqueIdentifier",
      primaryKey: "uniqueIdentifier",
    },
  },
  byBatchBrandId: {
    _meta: {
      legacy: true,
      table: "BatchPayment",
      index: "byBatchBrandId",
      primaryKey: "batchBrandId",
      sortKey: "paymentType",
    },
  },
};

export const BillingCreditTable = {
  _meta: {
    legacy: true,
    table: "BillingCredit",
    primaryKey: "id",
  },
  byMemberContractBillingId: {
    _meta: {
      legacy: true,
      table: "BillingCredit",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
};

export const BrandTable = {
  _meta: {
    legacy: true,
    table: "Brand",
    primaryKey: "id",
  },
  brandByName: {
    _meta: {
      legacy: true,
      table: "Brand",
      index: "brandByName",
      primaryKey: "name",
    },
  },
};

export const CardNumberTable = {
  _meta: {
    legacy: true,
    table: "CardNumber",
    primaryKey: "id",
  },
  byCardNumber: {
    _meta: {
      legacy: true,
      table: "CardNumber",
      index: "byCardNumber",
      primaryKey: "cardNumber",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "CardNumber",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const ClassBookingTable = {
  _meta: {
    legacy: true,
    table: "ClassBooking",
    primaryKey: "id",
  },
  byClassScheduleId: {
    _meta: {
      legacy: true,
      table: "ClassBooking",
      index: "byClassScheduleId",
      primaryKey: "classScheduleId",
      sortKey: "bookedDateTime",
    },
  },
  byCasualEmail: {
    _meta: {
      legacy: true,
      table: "ClassBooking",
      index: "byCasualEmail",
      primaryKey: "casualEmail",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "ClassBooking",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byWaitlistClassScheduleId: {
    _meta: {
      legacy: true,
      table: "ClassBooking",
      index: "byWaitlistClassScheduleId",
      primaryKey: "waitlistClassScheduleId",
      sortKey: "bookedDateTime",
    },
  },
};

export const ClassInstructorTable = {
  _meta: {
    legacy: true,
    table: "ClassInstructor",
    primaryKey: "id",
  },
};

export const ClassScheduleTable = {
  _meta: {
    legacy: true,
    table: "ClassSchedule",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "ClassSchedule",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "classScheduleDateTime",
    },
  },
  bySeriesId: {
    _meta: {
      legacy: true,
      table: "ClassSchedule",
      index: "bySeriesId",
      primaryKey: "seriesId",
      sortKey: "classScheduleDateTime",
    },
  },
  byClassTemplateId: {
    _meta: {
      legacy: true,
      table: "ClassSchedule",
      index: "byClassTemplateId",
      primaryKey: "classTemplateId",
      sortKey: "classScheduleDateTime",
    },
  },
};

export const ClassTemplateTable = {
  _meta: {
    legacy: true,
    table: "ClassTemplate",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "ClassTemplate",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
};

export const DataStorageTable = {
  _meta: {
    legacy: true,
    table: "DataStorage",
    primaryKey: "id",
  },
  byTargetId: {
    _meta: {
      legacy: true,
      table: "DataStorage",
      index: "byTargetId",
      primaryKey: "targetId",
      sortKey: "createdAt",
    },
  },
};

export const DebtCollectionTable = {
  _meta: {
    legacy: true,
    table: "DebtCollection",
    primaryKey: "id",
  },
  byContractId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byContractId",
      primaryKey: "contractId",
    },
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
  byGroupId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byGroupId",
      primaryKey: "groupId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byLastBillingId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byLastBillingId",
      primaryKey: "lastBillingId",
    },
  },
  byMemberContractLogId: {
    _meta: {
      legacy: true,
      table: "DebtCollection",
      index: "byMemberContractLogId",
      primaryKey: "memberContractLogId",
    },
  },
};

export const DirectDebitLogTable = {
  _meta: {
    legacy: true,
    table: "DirectDebitLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "DirectDebitLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
      sortKey: "type",
    },
  },
  byStaffId: {
    _meta: {
      legacy: true,
      table: "DirectDebitLog",
      index: "byStaffId",
      primaryKey: "updatedBy",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      legacy: true,
      table: "DirectDebitLog",
      index: "byMemberContractBillingId",
      primaryKey: "billingId",
      sortKey: "createdAt",
    },
  },
};

export const DoorAccessCodeTable = {
  _meta: {
    legacy: true,
    table: "DoorAccessCode",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "DoorAccessCode",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const DoorAccessLogTable = {
  _meta: {
    legacy: true,
    table: "DoorAccessLog",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "DoorAccessLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byCreatedAt: {
    _meta: {
      legacy: true,
      table: "DoorAccessLog",
      index: "byCreatedAt",
      primaryKey: "createdAt",
    },
  },
  byMember: {
    _meta: {
      legacy: true,
      table: "DoorAccessLog",
      index: "byMember",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byState: {
    _meta: {
      legacy: true,
      table: "DoorAccessLog",
      index: "byState",
      primaryKey: "locationState",
    },
  },
};

export const DoorConnectionTable = {
  _meta: {
    legacy: true,
    table: "DoorConnection",
    primaryKey: "id",
  },
  byConfigId: {
    _meta: {
      legacy: true,
      table: "DoorConnection",
      index: "byConfigId",
      primaryKey: "configurationId",
    },
  },
};

export const FeatureTable = {
  _meta: {
    legacy: true,
    table: "Feature",
    primaryKey: "id",
  },
  featuresById: {
    _meta: {
      legacy: true,
      table: "Feature",
      index: "featuresById",
      primaryKey: "id",
    },
  },
};

export const FitnessPassportLocationTable = {
  _meta: {
    legacy: true,
    table: "FitnessPassportLocation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "FitnessPassportLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const FitnessPassportRequestLogTable = {
  _meta: {
    legacy: true,
    table: "FitnessPassportRequestLog",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "FitnessPassportRequestLog",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "FitnessPassportRequestLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "FitnessPassportRequestLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byFitnessPassportNumber: {
    _meta: {
      legacy: true,
      table: "FitnessPassportRequestLog",
      index: "byFitnessPassportNumber",
      primaryKey: "fitnessPassportNumber",
    },
  },
};

export const GeoPointTable = {
  _meta: {
    legacy: true,
    table: "GeoPoint",
    primaryKey: "hashKey",
    sortKey: "rangeKey",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "GeoPoint",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  "geohash-index": {
    _meta: {
      legacy: true,
      table: "GeoPoint",
      index: "geohash-index",
      primaryKey: "hashKey",
      sortKey: "geohash",
    },
  },
};

export const GroupTable = {
  _meta: {
    legacy: true,
    table: "Group",
    primaryKey: "id",
  },
  byName: {
    _meta: {
      legacy: true,
      table: "Group",
      index: "byName",
      primaryKey: "name",
    },
  },
};

export const GroupLocationTable = {
  _meta: {
    legacy: true,
    table: "GroupLocation",
    primaryKey: "id",
  },
  byGroup: {
    _meta: {
      legacy: true,
      table: "GroupLocation",
      index: "byGroup",
      primaryKey: "groupId",
    },
  },
  byLocation: {
    _meta: {
      legacy: true,
      table: "GroupLocation",
      index: "byLocation",
      primaryKey: "locationId",
    },
  },
};

export const GroupStaffTable = {
  _meta: {
    legacy: true,
    table: "GroupStaff",
    primaryKey: "id",
  },
  byGroup: {
    _meta: {
      legacy: true,
      table: "GroupStaff",
      index: "byGroup",
      primaryKey: "groupId",
    },
  },
  byStaff: {
    _meta: {
      legacy: true,
      table: "GroupStaff",
      index: "byStaff",
      primaryKey: "staffId",
    },
  },
};

export const HealthQuestionnaireTable = {
  _meta: {
    legacy: true,
    table: "HealthQuestionnaire",
    primaryKey: "id",
  },
  healthQuestionnaireByBrandId: {
    _meta: {
      legacy: true,
      table: "HealthQuestionnaire",
      index: "healthQuestionnaireByBrandId",
      primaryKey: "brandId",
    },
  },
};

export const InstructorCredentialTable = {
  _meta: {
    legacy: true,
    table: "InstructorCredential",
    primaryKey: "id",
  },
  byInstructorId: {
    _meta: {
      legacy: true,
      table: "InstructorCredential",
      index: "byInstructorId",
      primaryKey: "instructorId",
      sortKey: "createdAt",
    },
  },
};

export const LocationTable = {
  _meta: {
    legacy: true,
    table: "Location",
    primaryKey: "id",
  },
  locationByState: {
    _meta: {
      legacy: true,
      table: "Location",
      index: "locationByState",
      primaryKey: "state",
    },
  },
  locationByBrand: {
    _meta: {
      legacy: true,
      table: "Location",
      index: "locationByBrand",
      primaryKey: "brandId",
    },
  },
};

export const LocationAccessTimesTable = {
  _meta: {
    legacy: true,
    table: "LocationAccessTimes",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "LocationAccessTimes",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "type",
    },
  },
};

export const LocationAuditOperationTable = {
  _meta: {
    legacy: true,
    table: "LocationAuditOperation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "LocationAuditOperation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const LocationFeatureTable = {
  _meta: {
    legacy: true,
    table: "LocationFeature",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "LocationFeature",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  locationFeaturesById: {
    _meta: {
      legacy: true,
      table: "LocationFeature",
      index: "locationFeaturesById",
      primaryKey: "id",
    },
  },
};

export const LocationMaintenanceTable = {
  _meta: {
    legacy: true,
    table: "LocationMaintenance",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "LocationMaintenance",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const LocationStudioTable = {
  _meta: {
    legacy: true,
    table: "LocationStudio",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "LocationStudio",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const MemberTable = {
  _meta: {
    legacy: true,
    table: "Member",
    primaryKey: "memberId",
  },
  byMemberType: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "byMemberType",
      primaryKey: "type",
      sortKey: "joinedDateTime",
    },
  },
  memberByMobile: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByMobile",
      primaryKey: "mobileNumber",
    },
  },
  memberByEmail: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByEmail",
      primaryKey: "email",
    },
  },
  memberByAliasId: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByAliasId",
      primaryKey: "aliasMemberId",
    },
  },
  memberByHomeLocationId: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByHomeLocationId",
      primaryKey: "homeLocationId",
    },
  },
  memberByNickname: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByNickname",
      primaryKey: "nickname",
    },
  },
  memberBySurname: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberBySurname",
      primaryKey: "surname",
    },
  },
  memberByBrandId: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByBrandId",
      primaryKey: "brandId",
      sortKey: "type",
    },
  },
  memberByName: {
    _meta: {
      legacy: true,
      table: "Member",
      index: "memberByName",
      primaryKey: "givenName",
    },
  },
};

export const MemberActivityTable = {
  _meta: {
    legacy: true,
    table: "MemberActivity",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberActivity",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const MemberBlockTable = {
  _meta: {
    legacy: true,
    table: "MemberBlock",
    primaryKey: "id",
  },
  byBlockTo: {
    _meta: {
      legacy: true,
      table: "MemberBlock",
      index: "byBlockTo",
      primaryKey: "blockTo",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberBlock",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "recordType",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberBlock",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byBlockFrom: {
    _meta: {
      legacy: true,
      table: "MemberBlock",
      index: "byBlockFrom",
      primaryKey: "blockFrom",
      sortKey: "blockTo",
    },
  },
};

export const MemberContractTable = {
  _meta: {
    legacy: true,
    table: "MemberContract",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byStartDateTime: {
    _meta: {
      legacy: true,
      table: "MemberContract",
      index: "byStartDateTime",
      primaryKey: "startDateTime",
    },
  },
};

export const MemberContractBillingTable = {
  _meta: {
    legacy: true,
    table: "MemberContractBilling",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "debitDate",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      legacy: true,
      table: "MemberContractBilling",
      index: "byDebitDate",
      primaryKey: "debitDate",
    },
  },
};

export const MemberContractLogTable = {
  _meta: {
    legacy: true,
    table: "MemberContractLog",
    primaryKey: "id",
  },
  byLogType: {
    _meta: {
      legacy: true,
      table: "MemberContractLog",
      index: "byLogType",
      primaryKey: "logType",
      sortKey: "createdAt",
    },
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "MemberContractLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberContractLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "logType",
    },
  },
};

export const MemberContractSuspensionTable = {
  _meta: {
    legacy: true,
    table: "MemberContractSuspension",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspension",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspension",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspension",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const MemberContractSuspensionLogTable = {
  _meta: {
    legacy: true,
    table: "MemberContractSuspensionLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspensionLog",
      index: "byMemberContractId",
      primaryKey: "contractId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspensionLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byMemberSuspensionId: {
    _meta: {
      legacy: true,
      table: "MemberContractSuspensionLog",
      index: "byMemberSuspensionId",
      primaryKey: "suspensionId",
    },
  },
};

export const MemberDeviceTable = {
  _meta: {
    legacy: true,
    table: "MemberDevice",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberDevice",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  memberDeviceByEmail: {
    _meta: {
      legacy: true,
      table: "MemberDevice",
      index: "memberDeviceByEmail",
      primaryKey: "email",
      sortKey: "createdAt",
    },
  },
};

export const MemberOutstandingBalanceLogTable = {
  _meta: {
    legacy: true,
    table: "MemberOutstandingBalanceLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "MemberOutstandingBalanceLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byAction: {
    _meta: {
      legacy: true,
      table: "MemberOutstandingBalanceLog",
      index: "byAction",
      primaryKey: "action",
      sortKey: "createdAt",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberOutstandingBalanceLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberOutstandingBalanceLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const MemberReceiptTable = {
  _meta: {
    legacy: true,
    table: "MemberReceipt",
    primaryKey: "id",
  },
  byBatchPaymentId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byBatchPaymentId",
      primaryKey: "batchPaymentId",
    },
  },
  byContractId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byContractId",
      primaryKey: "contractId",
      sortKey: "createdAt",
    },
  },
  byBillingId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byBillingId",
      primaryKey: "billingId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byTransactionId: {
    _meta: {
      legacy: true,
      table: "MemberReceipt",
      index: "byTransactionId",
      primaryKey: "transactionId",
    },
  },
};

export const MemberRequestTable = {
  _meta: {
    legacy: true,
    table: "MemberRequest",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "MemberRequest",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const MembershipTable = {
  _meta: {
    legacy: true,
    table: "Membership",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "Membership",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
};

export const MembershipActivationDateTable = {
  _meta: {
    legacy: true,
    table: "MembershipActivationDate",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "MembershipActivationDate",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
};

export const MembershipLocationTable = {
  _meta: {
    legacy: true,
    table: "MembershipLocation",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "MembershipLocation",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MembershipLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const MembershipLocationLogTable = {
  _meta: {
    legacy: true,
    table: "MembershipLocationLog",
    primaryKey: "id",
  },
  byMembership: {
    _meta: {
      legacy: true,
      table: "MembershipLocationLog",
      index: "byMembership",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      legacy: true,
      table: "MembershipLocationLog",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "MembershipLocationLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byCreatedBy: {
    _meta: {
      legacy: true,
      table: "MembershipLocationLog",
      index: "byCreatedBy",
      primaryKey: "createdBy",
    },
  },
};

export const MembershipPaymentTypeTable = {
  _meta: {
    legacy: true,
    table: "MembershipPaymentType",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "MembershipPaymentType",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
};

export const NicknameSuggestionTable = {
  _meta: {
    legacy: true,
    table: "NicknameSuggestion",
    primaryKey: "id",
  },
};

export const NoteTable = {
  _meta: {
    legacy: true,
    table: "Note",
    primaryKey: "id",
  },
  byMember: {
    _meta: {
      legacy: true,
      table: "Note",
      index: "byMember",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const NotificationTable = {
  _meta: {
    legacy: true,
    table: "Notification",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "Notification",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "Notification",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "Notification",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "displayUntil",
    },
  },
  byEmail: {
    _meta: {
      legacy: true,
      table: "Notification",
      index: "byEmail",
      primaryKey: "email",
      sortKey: "displayUntil",
    },
  },
  byEventType: {
    _meta: {
      legacy: true,
      table: "Notification",
      index: "byEventType",
      primaryKey: "eventType",
      sortKey: "locationId#displayUntil",
    },
  },
};

export const PaymentGatewayLogTable = {
  _meta: {
    legacy: true,
    table: "PaymentGatewayLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  bySuspensionBillingCreditId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "bySuspensionBillingCreditId",
      primaryKey: "suspensionBillingCreditId",
    },
  },
  byBillingId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "byBillingId",
      primaryKey: "billingId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "requestedAt",
    },
  },
  byTransactionLogId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "byTransactionLogId",
      primaryKey: "transactionLogId",
    },
  },
  byMemberContractSuspensionId: {
    _meta: {
      legacy: true,
      table: "PaymentGatewayLog",
      index: "byMemberContractSuspensionId",
      primaryKey: "memberContractSuspensionId",
    },
  },
};

export const PaymentInformationTable = {
  _meta: {
    legacy: true,
    table: "PaymentInformation",
    primaryKey: "id",
  },
  byVivaPaymentInformationId: {
    _meta: {
      legacy: true,
      table: "PaymentInformation",
      index: "byVivaPaymentInformationId",
      primaryKey: "vivaPaymentInformationId",
    },
  },
  byTokenId: {
    _meta: {
      legacy: true,
      table: "PaymentInformation",
      index: "byTokenId",
      primaryKey: "tokenId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "PaymentInformation",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byCardToken: {
    _meta: {
      legacy: true,
      table: "PaymentInformation",
      index: "byCardToken",
      primaryKey: "cardToken",
    },
  },
};

export const PermissionTable = {
  _meta: {
    legacy: true,
    table: "Permission",
    primaryKey: "id",
  },
  byPermissions: {
    _meta: {
      legacy: true,
      table: "Permission",
      index: "byPermissions",
      primaryKey: "permissionName",
    },
  },
};

export const ProspectTable = {
  _meta: {
    legacy: true,
    table: "Prospect",
    primaryKey: "id",
  },
  prospectByEmail: {
    _meta: {
      legacy: true,
      table: "Prospect",
      index: "prospectByEmail",
      primaryKey: "email",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "Prospect",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const QuestionAnswerTable = {
  _meta: {
    legacy: true,
    table: "QuestionAnswer",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "QuestionAnswer",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const RefundTransactionTable = {
  _meta: {
    legacy: true,
    table: "RefundTransaction",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "RefundTransaction",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "refundDate",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "RefundTransaction",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "refundDate",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "RefundTransaction",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      legacy: true,
      table: "RefundTransaction",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
};

export const RejectionPaymentTable = {
  _meta: {
    legacy: true,
    table: "RejectionPayment",
    primaryKey: "id",
  },
  byBatchPaymentId: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byBatchPaymentId",
      primaryKey: "batchPaymentId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byDebitDate",
      primaryKey: "debitDate",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
  byBatchId: {
    _meta: {
      legacy: true,
      table: "RejectionPayment",
      index: "byBatchId",
      primaryKey: "batchId",
    },
  },
};

export const RejectionProcessTable = {
  _meta: {
    legacy: true,
    table: "RejectionProcess",
    primaryKey: "id",
  },
};

export const RoleTable = {
  _meta: {
    legacy: true,
    table: "Role",
    primaryKey: "id",
  },
  byRoleName: {
    _meta: {
      legacy: true,
      table: "Role",
      index: "byRoleName",
      primaryKey: "roleName",
    },
  },
};

export const RoleAndPermissionTable = {
  _meta: {
    legacy: true,
    table: "RoleAndPermission",
    primaryKey: "id",
  },
  byPermission: {
    _meta: {
      legacy: true,
      table: "RoleAndPermission",
      index: "byPermission",
      primaryKey: "permissionId",
    },
  },
  byRole: {
    _meta: {
      legacy: true,
      table: "RoleAndPermission",
      index: "byRole",
      primaryKey: "roleId",
    },
  },
};

export const SettlementReportTable = {
  _meta: {
    legacy: true,
    table: "SettlementReport",
    primaryKey: "id",
  },
  bySettlementInvoiceId: {
    _meta: {
      legacy: true,
      table: "SettlementReport",
      index: "bySettlementInvoiceId",
      primaryKey: "settlementInvoiceId",
    },
  },
  byBrandId: {
    _meta: {
      legacy: true,
      table: "SettlementReport",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "SettlementReport",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const SmsIncomingTable = {
  _meta: {
    legacy: true,
    table: "SmsIncoming",
    primaryKey: "id",
  },
  bySender: {
    _meta: {
      legacy: true,
      table: "SmsIncoming",
      index: "bySender",
      primaryKey: "from",
      sortKey: "dateTime",
    },
  },
  byDestination: {
    _meta: {
      legacy: true,
      table: "SmsIncoming",
      index: "byDestination",
      primaryKey: "to",
      sortKey: "dateTime",
    },
  },
};

export const SmsOutboxTable = {
  _meta: {
    legacy: true,
    table: "SmsOutbox",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "SmsOutbox",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "SmsOutbox",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byIdentityName: {
    _meta: {
      legacy: true,
      table: "SmsOutbox",
      index: "byIdentityName",
      primaryKey: "identityName",
      sortKey: "createdAt",
    },
  },
};

export const SmsResultTable = {
  _meta: {
    legacy: true,
    table: "SmsResult",
    primaryKey: "id",
  },
};

export const StaffLocationAccessTable = {
  _meta: {
    legacy: true,
    table: "StaffLocationAccess",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "StaffLocationAccess",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const StatisticsTable = {
  _meta: {
    legacy: true,
    table: "Statistics",
    primaryKey: "id",
  },
  byType: {
    _meta: {
      legacy: true,
      table: "Statistics",
      index: "byType",
      primaryKey: "type",
    },
  },
};

export const TransactionTable = {
  _meta: {
    legacy: true,
    table: "Transaction",
    primaryKey: "id",
  },
  ByMemberId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "ByMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  bySuspensionBillingCreditId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "bySuspensionBillingCreditId",
      primaryKey: "suspensionBillingCreditId",
    },
  },
  byOrderId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byOrderId",
      primaryKey: "orderId",
    },
  },
  byPaymentGatewayLogId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byPaymentGatewayLogId",
      primaryKey: "paymentGatewayLogId",
    },
  },
  byBillingCreditId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byBillingCreditId",
      primaryKey: "billingCreditId",
    },
  },
  byMemberContractSuspensionId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byMemberContractSuspensionId",
      primaryKey: "memberContractSuspensionId",
    },
  },
  byTransactionId: {
    _meta: {
      legacy: true,
      table: "Transaction",
      index: "byTransactionId",
      primaryKey: "transactionId",
    },
  },
};

export const VoucherTable = {
  _meta: {
    legacy: true,
    table: "Voucher",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "Voucher",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "Voucher",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byVoucherCode: {
    _meta: {
      legacy: true,
      table: "Voucher",
      index: "byVoucherCode",
      primaryKey: "voucherCode",
    },
  },
  byType: {
    _meta: {
      legacy: true,
      table: "Voucher",
      index: "byType",
      primaryKey: "type",
      sortKey: "createdAt",
    },
  },
};

export const VoucherInvitationTable = {
  _meta: {
    legacy: true,
    table: "VoucherInvitation",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "VoucherInvitation",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byVoucherId: {
    _meta: {
      legacy: true,
      table: "VoucherInvitation",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
  byDestination: {
    _meta: {
      legacy: true,
      table: "VoucherInvitation",
      index: "byDestination",
      primaryKey: "destination",
    },
  },
};

export const VoucherLocationTable = {
  _meta: {
    legacy: true,
    table: "VoucherLocation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "VoucherLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byVoucherId: {
    _meta: {
      legacy: true,
      table: "VoucherLocation",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
};

export const VoucherMemberTable = {
  _meta: {
    legacy: true,
    table: "VoucherMember",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      legacy: true,
      table: "VoucherMember",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "VoucherMember",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byVoucherId: {
    _meta: {
      legacy: true,
      table: "VoucherMember",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
};

export const consentFormDetailTable = {
  _meta: {
    legacy: true,
    table: "consentFormDetail",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      legacy: true,
      table: "consentFormDetail",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byLocationId: {
    _meta: {
      legacy: true,
      table: "consentFormDetail",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "consentFormDetail",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const juniorMemberGuardianDetailTable = {
  _meta: {
    legacy: true,
    table: "juniorMemberGuardianDetail",
    primaryKey: "Id",
  },
  byMemberId: {
    _meta: {
      legacy: true,
      table: "juniorMemberGuardianDetail",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};
