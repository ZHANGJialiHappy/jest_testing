type Props = {
    name?: string
} 

function Greet({name}:Props) {
  return (
    <div>
      <p>hi, {name}</p>
    </div>
  )
}

export default Greet
