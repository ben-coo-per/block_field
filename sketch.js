let theta = 30;
let inc = 20;
let t = 40;

let box_choices_array = [
  ['A', inc,   inc,   t],
  ['B', inc*2, inc,   t],
  ['C', inc,   inc*2, t],
  ['D', inc*2, inc*2, t],
  ['E', inc*3, inc,   t],
  ['F', inc,   inc*3, t],
  ['G', inc*2, inc*3, t],
  ['H', inc*3, inc*2, t]
];
let box_list=[];



function setup(){
  canvas = createCanvas(600,600);

}

function draw(){
  background(70);


  // for(let i = 0; i < box_list.length; i++){
  //   box_list[i].show_box();
  // }

  // for (let i = 0; i < width; i+= inc){
  //   line(0, i, height, i);
  // }
  //
  // for (let j = 0; j < height; j+= inc){
  //   line(j, 0, j, width);
  // }
  for(let x_loc = 0; x_loc < width; x_loc +=inc){
    for(let y_loc = 0; y_loc < height; y_loc +=inc){
      let r = random(100,200);
      let g = random(100,200);
      let b = random(100,200);
      fill(r,g,b);
      pick = random(box_choices_array);
      rect(x_loc, y_loc, pick[1], pick[2]);
    }
  }
  noLoop();

  // for (let i = 0; i < 10; i++){
  //
  // }
}

function mousePressed(){
  // box_type = random(box_choices_array);
  // let r = random(100,200);
  // let g = random(100,200);
  // let b = random(100,200);
  // box = new box_figure(box_type[1], box_type[2], t, mouseX, mouseY, r,g,b);
  // box_list.push(box)

}



class box_figure{
  constructor(w, h, t, loc_x, loc_y, r,g,b){
    this.w = w;
    this.h = h;
    this.t = t;
    this.loc_x = loc_x;
    this.loc_y = loc_y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  show_box(){
        fill(this.r, this.g, this.b)
        rect(this.loc_x,this.loc_y,this.w,this.h)

        fill(this.r+20, this.g+20, this.b+20)
        beginShape()
        vertex(this.loc_x,this.loc_y)
        vertex((this.loc_x+this.t*cos(radians(theta))), this.loc_y-this.t*sin(radians(theta)))
        vertex((this.loc_x+this.w+this.t*cos(radians(theta))), this.loc_y-this.t*sin(radians(theta)))
        vertex(this.loc_x+this.w,this.loc_y)
        endShape(CLOSE)
        fill(this.r-20, this.g-20, this.b-20)
        beginShape()
        vertex(this.loc_x + this.w, this.loc_y)
        vertex((this.loc_x + this.w + this.t * cos(radians(theta))), this.loc_y - this.t * sin(radians(theta)))
        vertex((this.loc_x + this.w + this.t * cos(radians(theta))), this.loc_y + this.h - this.t * sin(radians(theta)))
        vertex(this.loc_x + this.w, this.loc_y + this.h)
        endShape(CLOSE);
      }
}
