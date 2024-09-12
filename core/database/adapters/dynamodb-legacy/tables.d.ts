export declare const AccessGroupTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const AccessGroupAccessPointTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byAccessGroup: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const AccessPointTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byAuthToken: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocation: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byApiId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const AccessPointTimesTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byDoorAccessPointId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const ActionNotificationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byNotificationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const AuditOperationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const AuditVisitLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byClickedBy: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const BatchPaymentTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byToken: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byDebitDate: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberContractBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBatchId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byUniqueIdentifier: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBatchBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const BillingCreditTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const BrandTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    brandByName: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const CardNumberTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byCardNumber: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const ClassBookingTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byClassScheduleId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byCasualEmail: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byWaitlistClassScheduleId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const ClassInstructorTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
};
export declare const ClassScheduleTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    bySeriesId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byClassTemplateId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const ClassTemplateTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const DataStorageTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byTargetId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const DebtCollectionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byGroupId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLastBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberContractLogId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const DirectDebitLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byStaffId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberContractBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const DoorAccessCodeTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const DoorAccessLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byCreatedAt: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMember: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byState: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const DoorConnectionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byConfigId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const FeatureTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    featuresById: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const FitnessPassportLocationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const FitnessPassportRequestLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byFitnessPassportNumber: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const GeoPointTable: {
    _meta: {
        table: string;
        primaryKey: string;
        sortKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    "geohash-index": {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const GroupTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byName: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const GroupLocationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byGroup: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocation: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const GroupStaffTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byGroup: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byStaff: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const HealthQuestionnaireTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    healthQuestionnaireByBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const InstructorCredentialTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byInstructorId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const LocationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    locationByState: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    locationByBrand: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const LocationAccessTimesTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const LocationAuditOperationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const LocationFeatureTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    locationFeaturesById: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const LocationMaintenanceTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const LocationStudioTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    memberByMobile: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberByEmail: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberByAliasId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberByHomeLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberByNickname: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberBySurname: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    memberByBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    memberByName: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberActivityTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const MemberBlockTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBlockTo: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBlockFrom: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const MemberContractTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMembershipLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byStartDateTime: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberContractBillingTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMembershipLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byDebitDate: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberContractLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLogType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const MemberContractSuspensionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const MemberContractSuspensionLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberSuspensionId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberDeviceTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    memberDeviceByEmail: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const MemberOutstandingBalanceLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byAction: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberReceiptTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBatchPaymentId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byTransactionId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MemberRequestTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MembershipTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MembershipActivationDateTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MembershipLocationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MembershipLocationLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembership: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMembershipLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byCreatedBy: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const MembershipPaymentTypeTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const NicknameSuggestionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
};
export declare const NoteTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMember: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const NotificationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byEmail: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byEventType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const PaymentGatewayLogTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    bySuspensionBillingCreditId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byTransactionLogId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberContractSuspensionId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const PaymentInformationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byVivaPaymentInformationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byTokenId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byCardToken: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const PermissionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byPermissions: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const ProspectTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    prospectByEmail: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const QuestionAnswerTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const RefundTransactionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberContractBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const RejectionPaymentTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byBatchPaymentId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byDebitDate: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberContractBillingId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBatchId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const RejectionProcessTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
};
export declare const RoleTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byRoleName: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const RoleAndPermissionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byPermission: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byRole: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const SettlementReportTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    bySettlementInvoiceId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBrandId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const SmsIncomingTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    bySender: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byDestination: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const SmsOutboxTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byIdentityName: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const SmsResultTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
};
export declare const StaffLocationAccessTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const StatisticsTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const TransactionTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    ByMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    bySuspensionBillingCreditId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byOrderId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byPaymentGatewayLogId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byBillingCreditId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberContractSuspensionId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byTransactionId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const VoucherTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byVoucherCode: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byType: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
};
export declare const VoucherInvitationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byVoucherId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byDestination: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const VoucherLocationTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byVoucherId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const VoucherMemberTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMembershipId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byVoucherId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const consentFormDetailTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberContractId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
    byLocationId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
            sortKey: string;
        };
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
export declare const juniorMemberGuardianDetailTable: {
    _meta: {
        table: string;
        primaryKey: string;
    };
    byMemberId: {
        _meta: {
            table: string;
            index: string;
            primaryKey: string;
        };
    };
};
