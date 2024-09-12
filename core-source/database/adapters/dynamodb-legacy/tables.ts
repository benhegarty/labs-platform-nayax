export const AccessGroupTable = {
  _meta: {
    table: "AccessGroup",
    primaryKey: "id",
  },
  byMembershipLocationId: {
    _meta: {
      table: "AccessGroup",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
};

export const AccessGroupAccessPointTable = {
  _meta: {
    table: "AccessGroupAccessPoint",
    primaryKey: "id",
  },
  byAccessGroup: {
    _meta: {
      table: "AccessGroupAccessPoint",
      index: "byAccessGroup",
      primaryKey: "accessGroupId",
    },
  },
};

export const AccessPointTable = {
  _meta: {
    table: "AccessPoint",
    primaryKey: "id",
  },
  byAuthToken: {
    _meta: {
      table: "AccessPoint",
      index: "byAuthToken",
      primaryKey: "authToken",
    },
  },
  byLocation: {
    _meta: {
      table: "AccessPoint",
      index: "byLocation",
      primaryKey: "locationId",
    },
  },
  byApiId: {
    _meta: {
      table: "AccessPoint",
      index: "byApiId",
      primaryKey: "apiId",
    },
  },
};

export const AccessPointTimesTable = {
  _meta: {
    table: "AccessPointTimes",
    primaryKey: "id",
  },
  byDoorAccessPointId: {
    _meta: {
      table: "AccessPointTimes",
      index: "byDoorAccessPointId",
      primaryKey: "accessPointId",
    },
  },
  byLocationId: {
    _meta: {
      table: "AccessPointTimes",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const ActionNotificationTable = {
  _meta: {
    table: "ActionNotification",
    primaryKey: "id",
  },
  byNotificationId: {
    _meta: {
      table: "ActionNotification",
      index: "byNotificationId",
      primaryKey: "notificationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "ActionNotification",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const AuditOperationTable = {
  _meta: {
    table: "AuditOperation",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "AuditOperation",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const AuditVisitLogTable = {
  _meta: {
    table: "AuditVisitLog",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "AuditVisitLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byClickedBy: {
    _meta: {
      table: "AuditVisitLog",
      index: "byClickedBy",
      primaryKey: "clickedBy",
      sortKey: "createdAt",
    },
  },
  byType: {
    _meta: {
      table: "AuditVisitLog",
      index: "byType",
      primaryKey: "type",
    },
  },
};

export const BatchPaymentTable = {
  _meta: {
    table: "BatchPayment",
    primaryKey: "id",
  },
  byToken: {
    _meta: {
      table: "BatchPayment",
      index: "byToken",
      primaryKey: "token",
    },
  },
  byBrandId: {
    _meta: {
      table: "BatchPayment",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      table: "BatchPayment",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "BatchPayment",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      table: "BatchPayment",
      index: "byDebitDate",
      primaryKey: "debitDate",
      sortKey: "paymentType",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      table: "BatchPayment",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
  byBatchId: {
    _meta: {
      table: "BatchPayment",
      index: "byBatchId",
      primaryKey: "batchId",
      sortKey: "paymentType",
    },
  },
  byUniqueIdentifier: {
    _meta: {
      table: "BatchPayment",
      index: "byUniqueIdentifier",
      primaryKey: "uniqueIdentifier",
    },
  },
  byBatchBrandId: {
    _meta: {
      table: "BatchPayment",
      index: "byBatchBrandId",
      primaryKey: "batchBrandId",
      sortKey: "paymentType",
    },
  },
};

export const BillingCreditTable = {
  _meta: {
    table: "BillingCredit",
    primaryKey: "id",
  },
  byMemberContractBillingId: {
    _meta: {
      table: "BillingCredit",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
};

export const BrandTable = {
  _meta: {
    table: "Brand",
    primaryKey: "id",
  },
  brandByName: {
    _meta: {
      table: "Brand",
      index: "brandByName",
      primaryKey: "name",
    },
  },
};

export const CardNumberTable = {
  _meta: {
    table: "CardNumber",
    primaryKey: "id",
  },
  byCardNumber: {
    _meta: {
      table: "CardNumber",
      index: "byCardNumber",
      primaryKey: "cardNumber",
    },
  },
  byMemberId: {
    _meta: {
      table: "CardNumber",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const ClassBookingTable = {
  _meta: {
    table: "ClassBooking",
    primaryKey: "id",
  },
  byClassScheduleId: {
    _meta: {
      table: "ClassBooking",
      index: "byClassScheduleId",
      primaryKey: "classScheduleId",
      sortKey: "bookedDateTime",
    },
  },
  byCasualEmail: {
    _meta: {
      table: "ClassBooking",
      index: "byCasualEmail",
      primaryKey: "casualEmail",
    },
  },
  byMemberId: {
    _meta: {
      table: "ClassBooking",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byWaitlistClassScheduleId: {
    _meta: {
      table: "ClassBooking",
      index: "byWaitlistClassScheduleId",
      primaryKey: "waitlistClassScheduleId",
      sortKey: "bookedDateTime",
    },
  },
};

export const ClassInstructorTable = {
  _meta: {
    table: "ClassInstructor",
    primaryKey: "id",
  },
};

export const ClassScheduleTable = {
  _meta: {
    table: "ClassSchedule",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "ClassSchedule",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "classScheduleDateTime",
    },
  },
  bySeriesId: {
    _meta: {
      table: "ClassSchedule",
      index: "bySeriesId",
      primaryKey: "seriesId",
      sortKey: "classScheduleDateTime",
    },
  },
  byClassTemplateId: {
    _meta: {
      table: "ClassSchedule",
      index: "byClassTemplateId",
      primaryKey: "classTemplateId",
      sortKey: "classScheduleDateTime",
    },
  },
};

export const ClassTemplateTable = {
  _meta: {
    table: "ClassTemplate",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      table: "ClassTemplate",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
};

export const DataStorageTable = {
  _meta: {
    table: "DataStorage",
    primaryKey: "id",
  },
  byTargetId: {
    _meta: {
      table: "DataStorage",
      index: "byTargetId",
      primaryKey: "targetId",
      sortKey: "createdAt",
    },
  },
};

export const DebtCollectionTable = {
  _meta: {
    table: "DebtCollection",
    primaryKey: "id",
  },
  byContractId: {
    _meta: {
      table: "DebtCollection",
      index: "byContractId",
      primaryKey: "contractId",
    },
  },
  byBrandId: {
    _meta: {
      table: "DebtCollection",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
  byGroupId: {
    _meta: {
      table: "DebtCollection",
      index: "byGroupId",
      primaryKey: "groupId",
    },
  },
  byLocationId: {
    _meta: {
      table: "DebtCollection",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      table: "DebtCollection",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byLastBillingId: {
    _meta: {
      table: "DebtCollection",
      index: "byLastBillingId",
      primaryKey: "lastBillingId",
    },
  },
  byMemberContractLogId: {
    _meta: {
      table: "DebtCollection",
      index: "byMemberContractLogId",
      primaryKey: "memberContractLogId",
    },
  },
};

export const DirectDebitLogTable = {
  _meta: {
    table: "DirectDebitLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "DirectDebitLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
      sortKey: "type",
    },
  },
  byStaffId: {
    _meta: {
      table: "DirectDebitLog",
      index: "byStaffId",
      primaryKey: "updatedBy",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      table: "DirectDebitLog",
      index: "byMemberContractBillingId",
      primaryKey: "billingId",
      sortKey: "createdAt",
    },
  },
};

export const DoorAccessCodeTable = {
  _meta: {
    table: "DoorAccessCode",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "DoorAccessCode",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const DoorAccessLogTable = {
  _meta: {
    table: "DoorAccessLog",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "DoorAccessLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byCreatedAt: {
    _meta: {
      table: "DoorAccessLog",
      index: "byCreatedAt",
      primaryKey: "createdAt",
    },
  },
  byMember: {
    _meta: {
      table: "DoorAccessLog",
      index: "byMember",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byState: {
    _meta: {
      table: "DoorAccessLog",
      index: "byState",
      primaryKey: "locationState",
    },
  },
};

export const DoorConnectionTable = {
  _meta: {
    table: "DoorConnection",
    primaryKey: "id",
  },
  byConfigId: {
    _meta: {
      table: "DoorConnection",
      index: "byConfigId",
      primaryKey: "configurationId",
    },
  },
};

export const FeatureTable = {
  _meta: {
    table: "Feature",
    primaryKey: "id",
  },
  featuresById: {
    _meta: {
      table: "Feature",
      index: "featuresById",
      primaryKey: "id",
    },
  },
};

export const FitnessPassportLocationTable = {
  _meta: {
    table: "FitnessPassportLocation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "FitnessPassportLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const FitnessPassportRequestLogTable = {
  _meta: {
    table: "FitnessPassportRequestLog",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      table: "FitnessPassportRequestLog",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      table: "FitnessPassportRequestLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "FitnessPassportRequestLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byFitnessPassportNumber: {
    _meta: {
      table: "FitnessPassportRequestLog",
      index: "byFitnessPassportNumber",
      primaryKey: "fitnessPassportNumber",
    },
  },
};

export const GeoPointTable = {
  _meta: {
    table: "GeoPoint",
    primaryKey: "hashKey",
    sortKey: "rangeKey",
  },
  byLocationId: {
    _meta: {
      table: "GeoPoint",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  "geohash-index": {
    _meta: {
      table: "GeoPoint",
      index: "geohash-index",
      primaryKey: "hashKey",
      sortKey: "geohash",
    },
  },
};

export const GroupTable = {
  _meta: {
    table: "Group",
    primaryKey: "id",
  },
  byName: {
    _meta: {
      table: "Group",
      index: "byName",
      primaryKey: "name",
    },
  },
};

export const GroupLocationTable = {
  _meta: {
    table: "GroupLocation",
    primaryKey: "id",
  },
  byGroup: {
    _meta: {
      table: "GroupLocation",
      index: "byGroup",
      primaryKey: "groupId",
    },
  },
  byLocation: {
    _meta: {
      table: "GroupLocation",
      index: "byLocation",
      primaryKey: "locationId",
    },
  },
};

export const GroupStaffTable = {
  _meta: {
    table: "GroupStaff",
    primaryKey: "id",
  },
  byGroup: {
    _meta: {
      table: "GroupStaff",
      index: "byGroup",
      primaryKey: "groupId",
    },
  },
  byStaff: {
    _meta: {
      table: "GroupStaff",
      index: "byStaff",
      primaryKey: "staffId",
    },
  },
};

export const HealthQuestionnaireTable = {
  _meta: {
    table: "HealthQuestionnaire",
    primaryKey: "id",
  },
  healthQuestionnaireByBrandId: {
    _meta: {
      table: "HealthQuestionnaire",
      index: "healthQuestionnaireByBrandId",
      primaryKey: "brandId",
    },
  },
};

export const InstructorCredentialTable = {
  _meta: {
    table: "InstructorCredential",
    primaryKey: "id",
  },
  byInstructorId: {
    _meta: {
      table: "InstructorCredential",
      index: "byInstructorId",
      primaryKey: "instructorId",
      sortKey: "createdAt",
    },
  },
};

export const LocationTable = {
  _meta: {
    table: "Location",
    primaryKey: "id",
  },
  locationByState: {
    _meta: {
      table: "Location",
      index: "locationByState",
      primaryKey: "state",
    },
  },
  locationByBrand: {
    _meta: {
      table: "Location",
      index: "locationByBrand",
      primaryKey: "brandId",
    },
  },
};

export const LocationAccessTimesTable = {
  _meta: {
    table: "LocationAccessTimes",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "LocationAccessTimes",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "type",
    },
  },
};

export const LocationAuditOperationTable = {
  _meta: {
    table: "LocationAuditOperation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "LocationAuditOperation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const LocationFeatureTable = {
  _meta: {
    table: "LocationFeature",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "LocationFeature",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  locationFeaturesById: {
    _meta: {
      table: "LocationFeature",
      index: "locationFeaturesById",
      primaryKey: "id",
    },
  },
};

export const LocationMaintenanceTable = {
  _meta: {
    table: "LocationMaintenance",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "LocationMaintenance",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const LocationStudioTable = {
  _meta: {
    table: "LocationStudio",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "LocationStudio",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const MemberTable = {
  _meta: {
    table: "Member",
    primaryKey: "memberId",
  },
  byMemberType: {
    _meta: {
      table: "Member",
      index: "byMemberType",
      primaryKey: "type",
      sortKey: "joinedDateTime",
    },
  },
  memberByMobile: {
    _meta: {
      table: "Member",
      index: "memberByMobile",
      primaryKey: "mobileNumber",
    },
  },
  memberByEmail: {
    _meta: {
      table: "Member",
      index: "memberByEmail",
      primaryKey: "email",
    },
  },
  memberByAliasId: {
    _meta: {
      table: "Member",
      index: "memberByAliasId",
      primaryKey: "aliasMemberId",
    },
  },
  memberByHomeLocationId: {
    _meta: {
      table: "Member",
      index: "memberByHomeLocationId",
      primaryKey: "homeLocationId",
    },
  },
  memberByNickname: {
    _meta: {
      table: "Member",
      index: "memberByNickname",
      primaryKey: "nickname",
    },
  },
  memberBySurname: {
    _meta: {
      table: "Member",
      index: "memberBySurname",
      primaryKey: "surname",
    },
  },
  memberByBrandId: {
    _meta: {
      table: "Member",
      index: "memberByBrandId",
      primaryKey: "brandId",
      sortKey: "type",
    },
  },
  memberByName: {
    _meta: {
      table: "Member",
      index: "memberByName",
      primaryKey: "givenName",
    },
  },
};

export const MemberActivityTable = {
  _meta: {
    table: "MemberActivity",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "MemberActivity",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const MemberBlockTable = {
  _meta: {
    table: "MemberBlock",
    primaryKey: "id",
  },
  byBlockTo: {
    _meta: {
      table: "MemberBlock",
      index: "byBlockTo",
      primaryKey: "blockTo",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberBlock",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "recordType",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberBlock",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byBlockFrom: {
    _meta: {
      table: "MemberBlock",
      index: "byBlockFrom",
      primaryKey: "blockFrom",
      sortKey: "blockTo",
    },
  },
};

export const MemberContractTable = {
  _meta: {
    table: "MemberContract",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "MemberContract",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      table: "MemberContract",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byBrandId: {
    _meta: {
      table: "MemberContract",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberContract",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberContract",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byStartDateTime: {
    _meta: {
      table: "MemberContract",
      index: "byStartDateTime",
      primaryKey: "startDateTime",
    },
  },
};

export const MemberContractBillingTable = {
  _meta: {
    table: "MemberContractBilling",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byMembershipId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byBrandId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "debitDate",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberContractBilling",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      table: "MemberContractBilling",
      index: "byDebitDate",
      primaryKey: "debitDate",
    },
  },
};

export const MemberContractLogTable = {
  _meta: {
    table: "MemberContractLog",
    primaryKey: "id",
  },
  byLogType: {
    _meta: {
      table: "MemberContractLog",
      index: "byLogType",
      primaryKey: "logType",
      sortKey: "createdAt",
    },
  },
  byMemberContractId: {
    _meta: {
      table: "MemberContractLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberContractLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "logType",
    },
  },
};

export const MemberContractSuspensionTable = {
  _meta: {
    table: "MemberContractSuspension",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "MemberContractSuspension",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberContractSuspension",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberContractSuspension",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const MemberContractSuspensionLogTable = {
  _meta: {
    table: "MemberContractSuspensionLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "MemberContractSuspensionLog",
      index: "byMemberContractId",
      primaryKey: "contractId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberContractSuspensionLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byMemberSuspensionId: {
    _meta: {
      table: "MemberContractSuspensionLog",
      index: "byMemberSuspensionId",
      primaryKey: "suspensionId",
    },
  },
};

export const MemberDeviceTable = {
  _meta: {
    table: "MemberDevice",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "MemberDevice",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  memberDeviceByEmail: {
    _meta: {
      table: "MemberDevice",
      index: "memberDeviceByEmail",
      primaryKey: "email",
      sortKey: "createdAt",
    },
  },
};

export const MemberOutstandingBalanceLogTable = {
  _meta: {
    table: "MemberOutstandingBalanceLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "MemberOutstandingBalanceLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byAction: {
    _meta: {
      table: "MemberOutstandingBalanceLog",
      index: "byAction",
      primaryKey: "action",
      sortKey: "createdAt",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberOutstandingBalanceLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberOutstandingBalanceLog",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const MemberReceiptTable = {
  _meta: {
    table: "MemberReceipt",
    primaryKey: "id",
  },
  byBatchPaymentId: {
    _meta: {
      table: "MemberReceipt",
      index: "byBatchPaymentId",
      primaryKey: "batchPaymentId",
    },
  },
  byContractId: {
    _meta: {
      table: "MemberReceipt",
      index: "byContractId",
      primaryKey: "contractId",
      sortKey: "createdAt",
    },
  },
  byBillingId: {
    _meta: {
      table: "MemberReceipt",
      index: "byBillingId",
      primaryKey: "billingId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MemberReceipt",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "MemberReceipt",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byTransactionId: {
    _meta: {
      table: "MemberReceipt",
      index: "byTransactionId",
      primaryKey: "transactionId",
    },
  },
};

export const MemberRequestTable = {
  _meta: {
    table: "MemberRequest",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "MemberRequest",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const MembershipTable = {
  _meta: {
    table: "Membership",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      table: "Membership",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
};

export const MembershipActivationDateTable = {
  _meta: {
    table: "MembershipActivationDate",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "MembershipActivationDate",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
};

export const MembershipLocationTable = {
  _meta: {
    table: "MembershipLocation",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "MembershipLocation",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MembershipLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const MembershipLocationLogTable = {
  _meta: {
    table: "MembershipLocationLog",
    primaryKey: "id",
  },
  byMembership: {
    _meta: {
      table: "MembershipLocationLog",
      index: "byMembership",
      primaryKey: "membershipId",
    },
  },
  byMembershipLocationId: {
    _meta: {
      table: "MembershipLocationLog",
      index: "byMembershipLocationId",
      primaryKey: "membershipLocationId",
    },
  },
  byLocationId: {
    _meta: {
      table: "MembershipLocationLog",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byCreatedBy: {
    _meta: {
      table: "MembershipLocationLog",
      index: "byCreatedBy",
      primaryKey: "createdBy",
    },
  },
};

export const MembershipPaymentTypeTable = {
  _meta: {
    table: "MembershipPaymentType",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "MembershipPaymentType",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
};

export const NicknameSuggestionTable = {
  _meta: {
    table: "NicknameSuggestion",
    primaryKey: "id",
  },
};

export const NoteTable = {
  _meta: {
    table: "Note",
    primaryKey: "id",
  },
  byMember: {
    _meta: {
      table: "Note",
      index: "byMember",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const NotificationTable = {
  _meta: {
    table: "Notification",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      table: "Notification",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "createdAt",
    },
  },
  byLocationId: {
    _meta: {
      table: "Notification",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      table: "Notification",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "displayUntil",
    },
  },
  byEmail: {
    _meta: {
      table: "Notification",
      index: "byEmail",
      primaryKey: "email",
      sortKey: "displayUntil",
    },
  },
  byEventType: {
    _meta: {
      table: "Notification",
      index: "byEventType",
      primaryKey: "eventType",
      sortKey: "locationId#displayUntil",
    },
  },
};

export const PaymentGatewayLogTable = {
  _meta: {
    table: "PaymentGatewayLog",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  bySuspensionBillingCreditId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "bySuspensionBillingCreditId",
      primaryKey: "suspensionBillingCreditId",
    },
  },
  byBillingId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "byBillingId",
      primaryKey: "billingId",
    },
  },
  byMemberId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "requestedAt",
    },
  },
  byTransactionLogId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "byTransactionLogId",
      primaryKey: "transactionLogId",
    },
  },
  byMemberContractSuspensionId: {
    _meta: {
      table: "PaymentGatewayLog",
      index: "byMemberContractSuspensionId",
      primaryKey: "memberContractSuspensionId",
    },
  },
};

export const PaymentInformationTable = {
  _meta: {
    table: "PaymentInformation",
    primaryKey: "id",
  },
  byVivaPaymentInformationId: {
    _meta: {
      table: "PaymentInformation",
      index: "byVivaPaymentInformationId",
      primaryKey: "vivaPaymentInformationId",
    },
  },
  byTokenId: {
    _meta: {
      table: "PaymentInformation",
      index: "byTokenId",
      primaryKey: "tokenId",
    },
  },
  byMemberId: {
    _meta: {
      table: "PaymentInformation",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byCardToken: {
    _meta: {
      table: "PaymentInformation",
      index: "byCardToken",
      primaryKey: "cardToken",
    },
  },
};

export const PermissionTable = {
  _meta: {
    table: "Permission",
    primaryKey: "id",
  },
  byPermissions: {
    _meta: {
      table: "Permission",
      index: "byPermissions",
      primaryKey: "permissionName",
    },
  },
};

export const ProspectTable = {
  _meta: {
    table: "Prospect",
    primaryKey: "id",
  },
  prospectByEmail: {
    _meta: {
      table: "Prospect",
      index: "prospectByEmail",
      primaryKey: "email",
    },
  },
  byMemberId: {
    _meta: {
      table: "Prospect",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const QuestionAnswerTable = {
  _meta: {
    table: "QuestionAnswer",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "QuestionAnswer",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const RefundTransactionTable = {
  _meta: {
    table: "RefundTransaction",
    primaryKey: "id",
  },
  byBrandId: {
    _meta: {
      table: "RefundTransaction",
      index: "byBrandId",
      primaryKey: "brandId",
      sortKey: "refundDate",
    },
  },
  byLocationId: {
    _meta: {
      table: "RefundTransaction",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "refundDate",
    },
  },
  byMemberId: {
    _meta: {
      table: "RefundTransaction",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      table: "RefundTransaction",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
};

export const RejectionPaymentTable = {
  _meta: {
    table: "RejectionPayment",
    primaryKey: "id",
  },
  byBatchPaymentId: {
    _meta: {
      table: "RejectionPayment",
      index: "byBatchPaymentId",
      primaryKey: "batchPaymentId",
    },
  },
  byLocationId: {
    _meta: {
      table: "RejectionPayment",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byMemberId: {
    _meta: {
      table: "RejectionPayment",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byDebitDate: {
    _meta: {
      table: "RejectionPayment",
      index: "byDebitDate",
      primaryKey: "debitDate",
    },
  },
  byMemberContractBillingId: {
    _meta: {
      table: "RejectionPayment",
      index: "byMemberContractBillingId",
      primaryKey: "memberContractBillingId",
    },
  },
  byBatchId: {
    _meta: {
      table: "RejectionPayment",
      index: "byBatchId",
      primaryKey: "batchId",
    },
  },
};

export const RejectionProcessTable = {
  _meta: {
    table: "RejectionProcess",
    primaryKey: "id",
  },
};

export const RoleTable = {
  _meta: {
    table: "Role",
    primaryKey: "id",
  },
  byRoleName: {
    _meta: {
      table: "Role",
      index: "byRoleName",
      primaryKey: "roleName",
    },
  },
};

export const RoleAndPermissionTable = {
  _meta: {
    table: "RoleAndPermission",
    primaryKey: "id",
  },
  byPermission: {
    _meta: {
      table: "RoleAndPermission",
      index: "byPermission",
      primaryKey: "permissionId",
    },
  },
  byRole: {
    _meta: {
      table: "RoleAndPermission",
      index: "byRole",
      primaryKey: "roleId",
    },
  },
};

export const SettlementReportTable = {
  _meta: {
    table: "SettlementReport",
    primaryKey: "id",
  },
  bySettlementInvoiceId: {
    _meta: {
      table: "SettlementReport",
      index: "bySettlementInvoiceId",
      primaryKey: "settlementInvoiceId",
    },
  },
  byBrandId: {
    _meta: {
      table: "SettlementReport",
      index: "byBrandId",
      primaryKey: "brandId",
    },
  },
  byLocationId: {
    _meta: {
      table: "SettlementReport",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
};

export const SmsIncomingTable = {
  _meta: {
    table: "SmsIncoming",
    primaryKey: "id",
  },
  bySender: {
    _meta: {
      table: "SmsIncoming",
      index: "bySender",
      primaryKey: "from",
      sortKey: "dateTime",
    },
  },
  byDestination: {
    _meta: {
      table: "SmsIncoming",
      index: "byDestination",
      primaryKey: "to",
      sortKey: "dateTime",
    },
  },
};

export const SmsOutboxTable = {
  _meta: {
    table: "SmsOutbox",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "SmsOutbox",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      table: "SmsOutbox",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byIdentityName: {
    _meta: {
      table: "SmsOutbox",
      index: "byIdentityName",
      primaryKey: "identityName",
      sortKey: "createdAt",
    },
  },
};

export const SmsResultTable = {
  _meta: {
    table: "SmsResult",
    primaryKey: "id",
  },
};

export const StaffLocationAccessTable = {
  _meta: {
    table: "StaffLocationAccess",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "StaffLocationAccess",
      index: "byMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
};

export const StatisticsTable = {
  _meta: {
    table: "Statistics",
    primaryKey: "id",
  },
  byType: {
    _meta: {
      table: "Statistics",
      index: "byType",
      primaryKey: "type",
    },
  },
};

export const TransactionTable = {
  _meta: {
    table: "Transaction",
    primaryKey: "id",
  },
  ByMemberId: {
    _meta: {
      table: "Transaction",
      index: "ByMemberId",
      primaryKey: "memberId",
      sortKey: "createdAt",
    },
  },
  byMemberContractId: {
    _meta: {
      table: "Transaction",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  bySuspensionBillingCreditId: {
    _meta: {
      table: "Transaction",
      index: "bySuspensionBillingCreditId",
      primaryKey: "suspensionBillingCreditId",
    },
  },
  byOrderId: {
    _meta: {
      table: "Transaction",
      index: "byOrderId",
      primaryKey: "orderId",
    },
  },
  byPaymentGatewayLogId: {
    _meta: {
      table: "Transaction",
      index: "byPaymentGatewayLogId",
      primaryKey: "paymentGatewayLogId",
    },
  },
  byBillingCreditId: {
    _meta: {
      table: "Transaction",
      index: "byBillingCreditId",
      primaryKey: "billingCreditId",
    },
  },
  byMemberContractSuspensionId: {
    _meta: {
      table: "Transaction",
      index: "byMemberContractSuspensionId",
      primaryKey: "memberContractSuspensionId",
    },
  },
  byTransactionId: {
    _meta: {
      table: "Transaction",
      index: "byTransactionId",
      primaryKey: "transactionId",
    },
  },
};

export const VoucherTable = {
  _meta: {
    table: "Voucher",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "Voucher",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byLocationId: {
    _meta: {
      table: "Voucher",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byVoucherCode: {
    _meta: {
      table: "Voucher",
      index: "byVoucherCode",
      primaryKey: "voucherCode",
    },
  },
  byType: {
    _meta: {
      table: "Voucher",
      index: "byType",
      primaryKey: "type",
      sortKey: "createdAt",
    },
  },
};

export const VoucherInvitationTable = {
  _meta: {
    table: "VoucherInvitation",
    primaryKey: "id",
  },
  byMemberId: {
    _meta: {
      table: "VoucherInvitation",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byVoucherId: {
    _meta: {
      table: "VoucherInvitation",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
  byDestination: {
    _meta: {
      table: "VoucherInvitation",
      index: "byDestination",
      primaryKey: "destination",
    },
  },
};

export const VoucherLocationTable = {
  _meta: {
    table: "VoucherLocation",
    primaryKey: "id",
  },
  byLocationId: {
    _meta: {
      table: "VoucherLocation",
      index: "byLocationId",
      primaryKey: "locationId",
    },
  },
  byVoucherId: {
    _meta: {
      table: "VoucherLocation",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
};

export const VoucherMemberTable = {
  _meta: {
    table: "VoucherMember",
    primaryKey: "id",
  },
  byMembershipId: {
    _meta: {
      table: "VoucherMember",
      index: "byMembershipId",
      primaryKey: "membershipId",
    },
  },
  byMemberId: {
    _meta: {
      table: "VoucherMember",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
  byVoucherId: {
    _meta: {
      table: "VoucherMember",
      index: "byVoucherId",
      primaryKey: "voucherId",
    },
  },
};

export const consentFormDetailTable = {
  _meta: {
    table: "consentFormDetail",
    primaryKey: "id",
  },
  byMemberContractId: {
    _meta: {
      table: "consentFormDetail",
      index: "byMemberContractId",
      primaryKey: "memberContractId",
    },
  },
  byLocationId: {
    _meta: {
      table: "consentFormDetail",
      index: "byLocationId",
      primaryKey: "locationId",
      sortKey: "createdAt",
    },
  },
  byMemberId: {
    _meta: {
      table: "consentFormDetail",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};

export const juniorMemberGuardianDetailTable = {
  _meta: {
    table: "juniorMemberGuardianDetail",
    primaryKey: "Id",
  },
  byMemberId: {
    _meta: {
      table: "juniorMemberGuardianDetail",
      index: "byMemberId",
      primaryKey: "memberId",
    },
  },
};
