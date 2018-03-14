class Friend {
	name: string;
	email: string;
	years: number;
	constructor (name: string,
				 email: string, years: number){
		this.name = name;
		this.email = email;
		this.years = years;
	}
	printOut(): void {
		console.log(`name =${this.name},email=${this.email}, years=${this.years}`);		
	}	
	}
let frnds: Friend[] = [
	new Friend("Chris", "cbrown@gmail.com", 1),
	new Friend("Kevin", "kmanifold@gmail.com", 6),
	new Friend("Greg", "gmanifold@gmail.com", 3),
	new Friend("Cat", "cmitchell@gmail.com", 6),
	new Friend("Nate", "nnate@gmail.com", 1)
];
for(let friend of frnds){
	friend.printOut();
}