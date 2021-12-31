import Add from "./add"
import Edit from "./edit"
import Record from "./record"
import useFetch from "./useFetch"


function Remove(){
  const {
    tickets: ticket, error
  } = useFetch('http://localhost:8000/tickets')
}
const remove = () => {
  alert("Do you want to delete the record?")
  
}

const edit = () =>{
  alert ("Do you want to edit the ticket details?")
}

const add = () =>{
  alert ("Add new ticket")
}

const help = () =>{
  alert ("Help page")
}
