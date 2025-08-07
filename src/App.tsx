import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Atom } from 'lucide-react';
import './App.css'

function App() {


  return (
    <>
      <div className='flex justify-center items-center h-screen w-full relative font-[Montserrat] bg-black'>



        <div className='bg-black/20 backdrop-filter backdrop-blur-md 
        shadow-lg border border-white/30 z-0 text-white
        h-120 w-120 flex flex-col justify-start p-10 gap-4 rounded-md relative'>
          <div className='bg-[#fff]  w-16 h-16 top-0  blur-3xl rounded-full absolute z-0' />
          <div className='z-1 flex justify-between items-center w-full'>

            <h1 className='inline-flex text-2xl font-normal z-1 tracking-wider'>
              Login
            </h1>
            <Atom className='z-1 text-white animate-spin duration-2000'
              strokeWidth={.8}
              style={{
                animationDuration: "2000ms"
              }}
            />
          </div>

          <form action="" className='flex flex-col  w-full h-full justify-start mt-4  gap-4'>

            <label htmlFor="" className=' inline-flex z-1 tacking-wider text-md text-white/60'>Email</label>
            <Input type="text" placeholder="Ejemplo@123.com" className='border-white/60 z-1' />
            <label htmlFor="" className=' inline-flex z-1 tacking-wider text-md text-white/60'>Password</label>
            <Input type="text" placeholder="Escribe tu contraseña" className='border-white/60 z-1' />
            <span className='text-sm  inline-flex z-1 text-white/45 cursor-pointer hover:text-white/70'>
              ¿Olvidaste tu contraseña?
            </span>
            <span className='text-sm inline-flex z-1 text-white/45 cursor-pointer hover:text-white/70'>
              ¿No tienes una cuenta?
            </span>
            <Button className='bg-transparent border border-white/60
             z-1 mt-2 hover:bg-transparent hover:text-white cursor-pointer
              text-white/65
              hover:shadow-sm shadow-white/50 
              ' variant={"ghost"}>
              Inicia Sesión
            </Button>

          </form>
          {/* <div className='bg-white/60 blur-xl  absolute top-0 left-0 w-full h-full ' /> */}


        </div>
      </div>
    </>
  )
}

export default App
