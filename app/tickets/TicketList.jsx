import Link from "next/link"
async function getTicketList(){
  //imitate delay
  await new Promise(resolve=>setTimeout(resolve,3000))
    const res=await fetch('http://localhost:4000/tickets', {
        next: {
          revalidate: 30 // use 0 to opt out of using cache
        }
      })
    return res.json()
}

export default async function TicketList() {
    const ticketList=await getTicketList()
  return (
    <>
      {ticketList.map((tickets)=>(
        <div key={tickets.id} className="card my-5">
          <Link href={`/tickets/${tickets.id}`}>
            <h1>{tickets.title}</h1>
            <p>{tickets.body.slice(0,200)}...</p>
            <div className={`pill ${tickets.priority}`}>
            {tickets.priority} priority
            </div>
            </Link>
        </div>
      ))}
            {ticketList.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}
