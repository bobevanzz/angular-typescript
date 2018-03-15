for (let x = 1; x <= 100; x++) {
	
	if(x % 3 && x % 5){
		console.log("FooBar");
	}
    else{
    	if( x % 3==0 ){
    		console.log("Foo");
    	}
    	if(x % 5==0 ){
    		console.log("Bar");
    	}
    }
    
    }
