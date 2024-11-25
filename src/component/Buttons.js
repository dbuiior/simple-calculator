const styling = btn =>{
    const className ={
        'X': 'operator',
        '/': 'operator',
        '+': 'operator',
        '-': 'operator',
        '?': 'support',
        '0' : 'equals',
        '=': 'equals',
    }
    return className[btn]
}



const Buttons = ({value}) => {
  return (
    <div>
      <button className={`${styling(value)} button`}>{value}</button>
    </div>
  )
}

export default Buttons
