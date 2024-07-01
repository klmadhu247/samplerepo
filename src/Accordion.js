import React, {useState} from "react";
import './accord.css'

function Accordion (){

    const [accordList,setAccordList]= useState([{
        id: 1,
        title: 'Do I have to allow the use of cookies?',
        info:
          'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
      },
      {
        id: 2,
        title: 'How do I change my My Page password?',
        info:
          'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
      },
      {
        id: 3,
        title: 'What is BankID?',
        info:
          'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
      },
      {
        id: 4,
        title: 'Whose birth number can I use?',
        info:
          'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
      },
      {
        id: 5,
        title: 'When do I recieve a password ordered by letter?',
        info:
          'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
      }]

    )

    const [click,setClick] = useState(false)

    const handleClick = (id)=>
        {
            setClick(!click)
            

            
        }


    return(
       <body className="body_main"> <main className="Acord_main" >

        <div className="container_box ">

            <div className="login_text "><h3>Qestions And Answers About Login </h3> </div>

           <article className="question_List">
              {accordList.map(item=><div className="accord_List"> <h5>{item.title} </h5>  <button  className="symbol" onClick={()=>handleClick(id)}> {accordList.click? '-':'+'} </button> 
             {click && <div><p>{item.info}</p></div>}</div> )}
             </article>

        </div>
        </main>

        </body>
    )
}
export default Accordion