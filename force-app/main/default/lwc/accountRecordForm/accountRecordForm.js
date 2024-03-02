import { LightningElement, track } from 'lwc';

import NAME_Field from '@salesforce/schema/Account.name';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Website_Field from '@salesforce/schema/Account.website';

export default class AccountRecordForm extends LightningElement {

@track recordId;
/*
    fieldArray = [NAME_Field, Phone_Field, Website_Field];
*/
    handleSuccess(event){
        this.recordId = event.detail.id;
    }

}