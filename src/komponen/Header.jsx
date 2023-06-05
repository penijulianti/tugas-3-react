

const nama = "Peni Julianti"
const styleHeader={
    fontSize: 55,
    color: "crimson",
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

}
function Header () {
  return (
    <>
    <header style={styleHeader}>{nama} </header>
    </>
  )
}

export default Header