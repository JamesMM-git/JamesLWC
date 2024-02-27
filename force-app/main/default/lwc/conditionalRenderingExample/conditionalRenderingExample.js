import { LightningElement, track} from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['New York','Chicago', 'DC', 'charleston'];
    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}