import {NavigationProvider} from "./app/routing/navigationProvider.tsx";
import {AuthProvider} from "./app/context/authContext.tsx";

function App() {

  return (
      <AuthProvider>
        <NavigationProvider/>
      </AuthProvider>
  )

}

export default App
