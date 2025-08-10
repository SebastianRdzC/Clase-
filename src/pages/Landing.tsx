import { Separator } from "@radix-ui/react-separator"
import { IconoGato } from "@/assets/iconoGato"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TvMinimalPlay, BookOpenCheck, Infinity, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Landing() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col h-screen w-full relative font-[Montserrat] bg-black/90 overflow-x-hidden'>

            <div className='backdrop-filter backdrop-blur-xl z-0 h-screen w-screen absolute bg-black/10' />

            {/* Navigation - Responsive */}
            <nav className="flex items-center px-4 sm:px-6 lg:px-15 pt-2 w-full fixed top-2 left-2 right-2 font-[Montserrat] text-white z-20">
                <div className="flex rounded-xl items-center justify-between gap-2 w-full
                            backdrop-filter backdrop-blur-xl px-3 sm:px-4 py-1 
                            bg-transparent">
                    <div className="flex gap-2">
                        <h1 className="text-base sm:text-lg tracking-wider">
                            C L A S E +
                        </h1>
                        <Separator orientation="vertical" className="w-[1px] h-6 sm:h-8 bg-white/20" />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-4 justify-between items-center text-sm group text-white/65">
                        <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:text-white/90 group-hover:text-white/30 hover:!text-white"
                            onClick={() => navigate('/login')}>
                            Inicia sesión
                        </li>
                        <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:text-white/90 group-hover:text-white/30 hover:!text-white">
                            Registrate
                        </li>
                        <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:text-white/90 group-hover:text-white/30 hover:!text-white">
                            Soporte
                        </li>
                        <li className="cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:text-white/90 group-hover:text-white/30 hover:!text-white">
                            Contacto
                        </li>
                    </ul>

                    {/* Mobile Navigation - Simplified */}
                    <div className="flex md:hidden gap-2 text-sm">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-white/70 hover:text-white px-2 hover:bg-transparent "
                            onClick={() => navigate('/login')}>
                            Entrar
                        </Button>
                    </div>

                    <IconoGato classname="w-8 h-8 sm:w-10 sm:h-10 text-white" color="#fff7" width={7} />
                </div>
            </nav>

            {/* Main Content - Responsive Layout */}
            <main className="z-5 mt-16 sm:mt-20 p-4 sm:p-6 lg:p-10 w-full text-white flex justify-center flex-1">
                
                {/* Desktop Layout */}
                <div className="hidden lg:flex h-full w-full">
                    {/* Left Content */}
                    <div className="flex flex-col h-full w-full flex-1">
                        <div className="text-sm p-3 bg-[#1c1c1e] rounded-full mb-4 w-fit backdrop-blur-md border-white/20 border
                                    flex gap-2 items-center">
                            <div className="rounded-full bg-white w-2 h-2 blur animate-pulse" />
                            <span>El futuro de tu educación</span>
                        </div>
                        <h1 className="text-6xl text-white mb-4 mt-2">Domina todas tus materias</h1>
                        <p className="text-2xl text-white/60 mb-8">Una plataforma integral donde estudiantes
                            encuentran los mejores cursos académicos para sus materias.
                        </p>
                        <div className="flex flex-row gap-4">
                            <Button className="bg-white h-12 rounded-xl text-black hover:scale-104 hover:bg-white
                                     transition-all duration-300 ease-in-out">
                                Explora nuestros cursos
                                <ArrowRight />
                            </Button>
                            <Button className="h-12 rounded-xl text-white hover:scale-104
                                     transition-all duration-300 ease-in-out">
                                <Play />
                                Ver presentación
                            </Button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="flex-1 flex justify-center items-center px-10 pl-14 relative top-0">
                        <div className="bg-white/5 rounded-full w-78 h-78 absolute top-10 right-15 blur-sm" />
                        <div className="bg-white/5 rounded-full w-78 h-78 absolute left-15 bottom-10 -z-1 blur-sm" />
                        <Card className="relative w-full h-full bg-transparent backdrop-blur-3xl
                                 border border-white/20 rounded-3xl px-8 shadow-2xl shadow-black/20 text-white">
                            <div className="w-full h-full flex justify-center items-center flex-col gap-4 relative z-10">
                                <h1 className="text-xl text-white">Nuestros cursos se componen de:</h1>
                                <ul className="gap-4 flex flex-row w-full justify-center items-center flex-wrap">
                                    <li className="flex-1">
                                        <Card className="bg-transparent border-none text-white/70 tracking-wide text-center
                                        flex flex-col items-center justify-between h-50">
                                            <h4 className="text-md">Videos explicativos paso a paso</h4>
                                            <TvMinimalPlay width={60} height={60} />
                                        </Card>
                                    </li>
                                    <li className="flex-1">
                                        <Card className="bg-transparent border-none text-white/70 tracking-wide text-center
                                        flex flex-col items-center justify-between h-50">
                                            <h4 className="text-md text-center">Ejercicios resueltos y explicados detalladamente</h4>
                                            <BookOpenCheck width={60} height={60} />
                                        </Card>
                                    </li>
                                    <li className="flex-1">
                                        <Card className="bg-transparent border-none text-white/70 tracking-wide text-center
                                        flex flex-col items-center justify-between h-50">
                                            <h4 className="text-md text-center">Acceso de por vida al contenido</h4>
                                            <Infinity width={60} height={60} />
                                        </Card>
                                    </li>
                                </ul>
                                <span>Todo lo que necesitas para dominar tus materias</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="flex lg:hidden flex-col w-full h-full justify-between">
                    {/* Hero Content */}
                    <div className="flex flex-col items-center text-center px-2">
                        <div className="text-xs sm:text-sm p-2 sm:p-3 bg-[#1c1c1e] rounded-full mb-4 w-fit backdrop-blur-md border-white/20 border
                                    flex gap-2 items-center">
                            <div className="rounded-full bg-white w-2 h-2 blur animate-pulse" />
                            <span>El futuro de tu educación</span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 mt-2 leading-tight">
                            Domina todas tus materias
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-6 max-w-2xl leading-relaxed">
                            Una plataforma integral donde estudiantes encuentran los mejores cursos académicos para sus materias.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
                            <Button className="bg-white h-11 sm:h-12 rounded-xl text-black hover:scale-104 hover:bg-white
                                     transition-all duration-300 ease-in-out flex-1">
                                <span className="hidden sm:inline">Explora nuestros cursos</span>
                                <span className="sm:hidden">Explorar cursos</span>
                                <ArrowRight className="ml-2" size={16} />
                            </Button>
                            <Button className="h-11 sm:h-12 rounded-xl text-white hover:scale-104
                                     transition-all duration-300 ease-in-out flex-1">
                                <Play className="mr-2" size={16} />
                                <span className="hidden sm:inline">Ver presentación</span>
                                <span className="sm:hidden">Ver demo</span>
                            </Button>
                        </div>
                    </div>

                    {/* Features Card - Mobile Optimized */}
                    <div className="mt-8 relative">
                        {/* Background Effects */}
                        <div className="bg-white/5 rounded-full w-32 h-32 sm:w-40 sm:h-40 absolute -top-4 -right-4 blur-sm opacity-50" />
                        <div className="bg-white/5 rounded-full w-32 h-32 sm:w-40 sm:h-40 absolute -bottom-4 -left-4 blur-sm opacity-50" />
                        
                        <Card className="relative bg-transparent backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl 
                                 p-4 sm:p-6 shadow-2xl shadow-black/20 text-white">
                            <div className="flex flex-col gap-4 relative z-10">
                                <h2 className="text-lg sm:text-xl text-white text-center mb-2">
                                    Nuestros cursos se componen de:
                                </h2>
                                
                                {/* Mobile Features - Stacked */}
                                <div className="flex flex-col gap-4">
                                    <Card className="bg-transparent border border-white/10 text-white/70 tracking-wide 
                                            flex flex-row items-center gap-4 p-4 rounded-xl">
                                        <TvMinimalPlay width={40} height={40} className="text-white/60 flex-shrink-0" />
                                        <div className="text-left">
                                            <h4 className="text-sm sm:text-base">Videos explicativos paso a paso</h4>
                                        </div>
                                    </Card>

                                    <Card className="bg-transparent border border-white/10 text-white/70 tracking-wide 
                                            flex flex-row items-center gap-4 p-4 rounded-xl">
                                        <BookOpenCheck width={40} height={40} className="text-white/60 flex-shrink-0" />
                                        <div className="text-left">
                                            <h4 className="text-sm sm:text-base">Ejercicios resueltos y explicados</h4>
                                        </div>
                                    </Card>

                                    <Card className="bg-transparent border border-white/10 text-white/70 tracking-wide 
                                            flex flex-row items-center gap-4 p-4 rounded-xl">
                                        <Infinity width={40} height={40} className="text-white/60 flex-shrink-0" />
                                        <div className="text-left">
                                            <h4 className="text-sm sm:text-base">Acceso de por vida al contenido</h4>
                                        </div>
                                    </Card>
                                </div>

                                <p className="text-center text-white/70 text-sm sm:text-base mt-2">
                                    Todo lo que necesitas para dominar tus materias
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 sm:bottom-0 w-fit h-fit flex justify-center items-center left-1/2 -translate-x-1/2">
                    <ChevronDown className="animate-bounce text-white/60" size={24} />
                </div>
            </main>
        </div>
    )
}