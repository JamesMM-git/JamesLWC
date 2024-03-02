/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-02-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AccountManager {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(Integer numberOfRecords) {

        return [Select Id, Name, Phone FROM Account Limit :numberOfRecords];

    }
}