export default class Clande {
  constructor(openTime,open,high,low,close){
    this.x = new Date(openTime);
    this.y = [parseFloat(open),parseFloat(low),parseFloat(close)]
  } 
}