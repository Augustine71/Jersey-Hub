import axios from "axios";
import React, { Component } from "react";
import { uid } from 'uid';
import pele from "../images/pele.png";

import Bot from './Bot';
import OrderSummary from './OrderSummary'

class Chat extends Component{
constructor(props) {
    super(props);
    this.state = { 
        messages:[],
        message:'',
        place:'',
        bot:'OrderJersey',
        jersey:'',
        jerseyprice:0,
        name: '',
        id:'',
        size:'',
        accessory:'',
        count:1,
        price:0,
        accessoryprice:0,
        totalprice:0,
        stage:1,
        address:'',
        infonum:1,
        date: new Date(),
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mes = this.mes.bind(this);
 }

  

 scrollToBottom = () => {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}

componentDidMount() {
  this.scrollToBottom();
}

componentDidUpdate() {
  this.scrollToBottom();
}
  
  handleChange(event) {
    this.setState({message: event.target.value});
  }

   handleClick(e){
    
    const code = e.keyCode || e.which;

    if (code === 13) {
      let current= new Date();  
      e.preventDefault();
      if(this.state.message===""){
        
      }

      else if(this.state.stage===2&&this.state.infonum===1)
      {
        this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true },
                      { message: "Enter your number", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                     );
        this.setState({infonum:2});
        this.setState({message:""});
        this.setState({name:e.target.value});
      }
      else if(this.state.stage===2&&this.state.infonum===2&&( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)!==true))
      {
      this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime" },
                    { message: "Please enter a valid number", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                   );
      this.setState({message:""});
    }
    else if(this.state.stage===2&&this.state.infonum===2&&( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)))
    {
      this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true },
                    { message: "Lastly your address", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]});
      this.setState({message:""});
      this.setState({infonum:3});
      this.setState({number:e.target.value});
    }
    else if(this.state.stage===2&&this.state.infonum===3)
    {
      let b=uid(5);
      let d= Date.now();
      this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true },
                    { message: "Your order has been placed", type: "bot" },
                    { message: "This is your order id: " + b, type: "bot" },
                    { message: "We will soon deliver your order", type: "bot" },
                    { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
                    );
      this.setState({address:e.target.value});
      this.setState({id:b});
      this.setState({time:d});
      this.setState({message:""});
      this.setState({infonum:1});
      this.setState({stage:1});
      this.setState({ bot:'OrderJersey'});
      const newOrder = {
        jersey: this.state.jersey,
        accesory:this.state.accessory,
        name: this.state.name,
        number: this.state.number,
        address: e.target.value,
        _id: b,
        time:d,
        price:this.state.totalprice
     }
     axios.post('/order/add', newOrder)
     .then(res => console.log(res.data));
    }
    else if(this.state.stage===3)
    {
      this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true  }]});
      let c=e.target.value
      axios.get('/order/'+ c)
         .then(res=>{
           let a=Date.now()-res.data.time;
           console.log(a);
           if(a<900000){
          this.setState({messages : [...this.state.messages,{ message: "Your order is getting ready", type: "bot" },
                         { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                       ); 
          this.setState({message:""});
          this.setState({stage:1});
          this.setState({ bot:'OrderJersey'});
                      }
         else if(a<1800000){
          this.setState({messages : [...this.state.messages,{ message: "Your order is out for delivery", type: "bot" },
                        { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                       ); 
          this.setState({message:""});
          this.setState({stage:1});
          this.setState({ bot:'OrderJersey'});
                      }
         else if(a>1800000){
          this.setState({messages : [...this.state.messages,{ message: "Your order has been delivered", type: "bot" },
                        { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                       ); 
          this.setState({message:""});
          this.setState({stage:1});
          this.setState({ bot:'OrderJersey'});
                      }                          
        })
         .catch(err=>{
          this.setState({messages : [...this.state.messages, { message: "Please enter a valid order id", type: "bot" },
                        { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                       );  
                       this.setState({ bot:'OrderJersey'}); 
        })
        this.setState({message:""});
        this.setState({stage:1});
    }
    else{
      this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                    { message: "Sorry I did not understand", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                   );
      this.setState({message:""});
    }
  }
}

  mes(e){
     let current= new Date()   
    const a= e.target.id;
    if(a==="Order-Jersey")
    {
      this.setState({messages : [...this.state.messages,  {message: e.target.value, type: "user", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true    },
      { message: "Choose your Jersey", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
      );
      this.setState({bot:e.target.id});
}
else if(a==="psg")
{
  this.setState({messages : [...this.state.messages, { message: e.target.id, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "How many would you like?", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
              );
  this.setState({bot:e.target.id});
  this.setState({jersey:"PSG Jrsy"});
  this.setState({jerseyprice:850});
}

else if(a==="barca")
{
  this.setState({messages : [...this.state.messages, { message: e.target.id, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "How many would you like?", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
              );
  this.setState({bot:e.target.id});
  this.setState({jersey:"Barca Jrsy"});
  this.setState({jerseyprice:900});
}

else if(a==="bayern")
{
  this.setState({messages : [...this.state.messages, { message: e.target.id, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "How many would you like?", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
              );
  this.setState({bot:e.target.id});
  this.setState({jersey:"Bayern Jrsy"});
  this.setState({jerseyprice:800});
}


else if(a==="num1"||a==="num2"||a==="num3"||a==="num4")
{
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "Would you like to add some accesories?", type: "bot", day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true }]}
               );
  this.setState({bot:e.target.id});
  this.setState({count:Number(e.target.value)});
  this.setState({price:(this.state.jerseyprice*Number(e.target.value))});
}
else if(a==="y")
{
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { message: "Choose your accesories", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
}
else if(a==="boots"){
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { message: "Choose your boots", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
}
else if(a==="pads"){
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { message: "Choose your Shin Guards", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
}
else if(a==="socks"){
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { message: "Choose your stockings", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
}
else if(a==="adidas"){
  this.setState({messages : [...this.state.messages, { message: "Adidas", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:e.target.id});
this.setState({accessoryprice:3500});
this.setState({totalprice:this.state.price+3500});
}
else if(a==="nike"){
  this.setState({messages : [...this.state.messages, { message: "Nike", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:e.target.id});
this.setState({accessoryprice:5000});
this.setState({totalprice:this.state.price+5000});
}
else if(a==="puma"){
  this.setState({messages : [...this.state.messages, { message: "Puma", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:e.target.id});
this.setState({accessoryprice:1500});
this.setState({totalprice:this.state.price+1500});
}
else if(a==="shin1"){
  this.setState({messages : [...this.state.messages, { message: "Shin Guards 1", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Shin Guards"});
this.setState({accessoryprice:200});
this.setState({totalprice:this.state.price+200});
}
else if(a==="shin2"){
  this.setState({messages : [...this.state.messages, { message: "Shin Guards 2", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Shin Guards"});
this.setState({accessoryprice:300});
this.setState({totalprice:this.state.price+300});
}
else if(a==="shin3"){
  this.setState({messages : [...this.state.messages, { message:"Shin Guards 3", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Shin Guards"});
this.setState({accessoryprice:350});
this.setState({totalprice:this.state.price+350});
}
else if(a==="socks1"){
  this.setState({messages : [...this.state.messages, { message: "Stockings 1", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Stockings"});
this.setState({accessoryprice:100});
this.setState({totalprice:this.state.price+100});
}
else if(a==="socks2"){
  this.setState({messages : [...this.state.messages, { message: "Stockings 2", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Stockings"});
this.setState({accessoryprice:150});
this.setState({totalprice:this.state.price+150});
}
else if(a==="socks3"){
  this.setState({messages : [...this.state.messages, { message: "Stockings 3", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
  { summary:true },
  { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
 );
this.setState({bot:e.target.id});
this.setState({accessory:"Stockings"});
this.setState({accessoryprice:200});
this.setState({totalprice:this.state.price+200});
}
else if(a==="n")
{
  this.setState({accessory:"None"});
  this.setState({messages : [...this.state.messages, { message: "e.target.value", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { summary:true },
                { message: "Would you like to confirm your order", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
               );
  this.setState({bot:e.target.id});
  this.setState({totalprice:this.state.price});
}


else if(a==="25")
{
  this.setState({messages : [...this.state.messages, { message: "Yes", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "Let me take your information now", type: "bot" },
                { message: "What is your name?", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
               );
  this.setState({bot:e.target.id});
  this.setState({stage:2});
}
else if(a==="26")
{
  this.setState({messages : [...this.state.messages, { message: "No", type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true  },
                { message: "Thank you for stopping by", type: "bot" },
                { message: "Hi! Welcome to Jersey Hub. I am Pele. How may i help you?", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
               );
  this.setState({bot:"OrderFood"});
}
else if(a==="Order-Details")
{
  this.setState({messages : [...this.state.messages, { message: e.target.value, type: "user",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), class: "usertime", last:true   },
                { message: "Please enter your order id", type: "bot",day:current.toLocaleString("default", { weekday: "short" }), time: current.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'), img: true, class: "bottime", last:true  }]}
                );
  this.setState({bot:e.target.id});            
  this.setState({stage:3});
}
}


render() {
  
    return (
      <div>
        <div className="msg-header">
            <div className="msg-header-img">
              <img src={pele} alt="bot"/>
            </div>
            <div className="active">
                <h4>Pele</h4>
            </div>
        </div>
          {/* Handle Messages */}
          <div className="historyContainer">
            
            <div className=" bot">Hi! Welcome to Jersey Hub. I am Pele. How may i help you?</div>
          <div className="msg-img">
           <img src={pele} alt="bot"/>
         </div>
         <h5 className="bottime">{this.state.date.toLocaleString("default", { weekday: "short" }) }{" "}{this.state.date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</h5>
       
     
            {this.state.messages.length === 0
              ? ""
              : this.state.messages.map((msg,index) =><div key={index}>
                {msg.summary ? <OrderSummary jersey={this.state.jersey} accessory={this.state.accessory}  jerseyrate={this.state.jerseyprice} jerseyQty={this.state.count} jerseyamount={this.state.price} accessoryprice={this.state.accessoryprice} totalprice={this.state.totalprice}/> :
               msg.last ?
                  <div>
                 <div className={msg.type}>{msg.message}</div>
              <div className="msg-img">
               { msg.img ? <img src={pele} alt="bot"/> : null }
             </div>
             <h5 className={msg.class}>{msg.day }{" "}{msg.time}</h5>
             </div>:
                
                
                   <div className={msg.type}>{msg.message}</div>}
                
             </div>
             
                
             )}
               <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
               <Bot 
               onClick={this.mes}
               upd={this.state.bot} 
                 />
               </div>
            </div>
          {/* Input Box */}
         <div className="input-box">
        <input
          type="text"
            id="chatBox"
           onChange={this.handleChange}
            onKeyPress={this.handleClick} 
            value={this.state.message}
            autoComplete="off"
            placeholder="Type a message"
          ></input>
         </div>
       </div>
      );  
    }
}


export default Chat;