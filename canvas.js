import React,{Component} from 'react'

class Ball extends Component {
    constructor(props){
        super(props)
        this.state = {
            radius: props.radius,
            dx: randomDx(),
            dy: randomDy(),
            mass :props.radius * props.radius * props.radius,
            x: props.x,
            y: props.y,
            color: randomColor()
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(Math.round(this.state.x), Math.round(this.state.y), this.state.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.state.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.stroke();
        ctx.closePath();
    };
    speed () {
        // magnitude of velocity vector
        return Math.sqrt(this.state.dx * this.state.dx + this.state.dy * this.state.dy);
    };
    angle () {
        //angle of ball with the x axis
        return Math.atan2(this.state.dy, this.state.dx);
    };
    onGround () {
        return (this.state.y + this.state.radius >= canvas.height)
    }
    render (){
        return (
            <div>

            </div>
        )
    }
}
