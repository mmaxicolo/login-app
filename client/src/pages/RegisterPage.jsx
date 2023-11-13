import InputForm from "./components/inputForm";

function registerPage() {
  return (
    <form>
        <InputForm type="text" name="name"/>
        <InputForm type="text" name="mail"/>
        <InputForm type="password" name="password"/>
        <button type="submit">Registrarse</button>
    </form>
  )
}

export default registerPage