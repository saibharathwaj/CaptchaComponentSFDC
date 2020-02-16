({
	doSubmit : function(component, event, helper) {
        alert('Submit Clicked::::');
	},
    
    doInit: function(component, event, helper){
        let vfOrigin= 'https://venkathsaibharath-nyce-dev-ed.lightning.force.com';
        window.addEventListener('message', function(event){
            console.log('Event . data::::',event.data);
            if(event.origin != vfOrigin){
                return;
            }
            if(event.data === 'Unlock'){
                let myButton=component.find('myButton');
                myButton.set('v.disabled',false);
            }
        }, false);
    }
})