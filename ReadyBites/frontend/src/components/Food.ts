


export class Food {
    constructor(public type: string, public waitingTime: number, public calories: number,
                public taste: number, public price: number, public image: string,
                public  coordinates: {type: [Number], default: [0, 0]}, public address: String) {


    }
  }