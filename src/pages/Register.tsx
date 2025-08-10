"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Atom, Eye, EyeOff, ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router"

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center h-screen w-screen relative font-[Montserrat] bg-[#fff] overflow-hidden">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="h-screen w-screen absolute bg-black/90" />
                    {/* Back Button */}
                    <div
                        className="absolute top-4 left-4 z-20 cursor-pointer hover:scale-110 transition-transform duration-200
                         flex items-center gap-2 rounded-lg p-2 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10
                        lg:left-5 text-xs sm:text-sm min-w-fit"
                        onClick={() => navigate("/")}
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 md:w-5" color="white" />
                        <span className="text-white text-sm font-[Montserrat] hidden sm:inline">Regresar</span>
                    </div>
                    {/* Background Effects */}
                    <div className="bg-white/20 w-60 h-60 sm:w-80 sm:h-80 absolute rounded-full -bottom-10 -left-10 blur-3xl" />
                    <div className="bg-white/20 w-60 h-60 sm:w-80 sm:h-80 absolute rounded-full -top-10 -right-10 blur-3xl" />
                    <div className="backdrop-filter backdrop-blur-xl z-0 h-screen w-screen absolute bg-black/10" />
                    {/* Main Container */}
                    <div className="z-0 text-white h-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-120 flex flex-col justify-start p-6 sm:p-8 md:p-10 lg:p-12 gap-3 sm:gap-4 lg:gap-5 rounded-xl relative">
                        {/* Header */}
                        <div className="z-1 flex flex-col justify-between items-center w-full gap-2 sm:gap-3 lg:gap-4">
                            <Atom
                                className="z-1 text-white animate-spin duration-2000 w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                                strokeWidth={0.8}
                                style={{
                                    animationDuration: "2000ms",
                                }}
                            />
                            <h1 className="inline-flex text-xl sm:text-2xl lg:text-3xl z-1 tracking-wider text-white text-center">
                                Únete a CLASE+
                            </h1>
                            <span className="text-xs sm:text-sm lg:text-sm inline-flex z-1 text-white/60 text-center">
                                Crea tu cuenta para comenzar tu aprendizaje
                            </span>
                        </div>
                        {/* Registration Form */}
                        <form
                            action=""
                            className="flex flex-col w-full h-full justify-start mt-3 sm:mt-4 lg:mt-5 gap-2 sm:gap-3 lg:gap-3"
                        >
                            {/* Email Field */}
                            <label
                                htmlFor="email"
                                className="inline-flex z-1 tracking-wider text-xs sm:text-sm lg:text-sm text-white/85"
                            >
                                Correo electrónico
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ejemplo@correo.com"
                                className="border-white/10 z-1 bg-[#1c1c1e] text-xs sm:text-sm lg:text-sm rounded-lg shadow-none ring-0
                                text-white placeholder:text-white/60 focus:border-white/70
                                transition-all duration-200 hover:border-white/60 h-10 sm:h-11 lg:h-auto"
                            />
                            {/* Username Field */}
                            <label
                                htmlFor="username"
                                className="inline-flex z-1 tracking-wider text-xs sm:text-sm lg:text-sm text-white/85 mt-1"
                            >
                                Nombre de usuario
                            </label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Tu nombre de usuario"
                                className="border-white/10 z-1 bg-[#1c1c1e] text-xs sm:text-sm lg:text-sm rounded-lg shadow-none ring-0
                                text-white placeholder:text-white/60 focus:border-white/70
                                transition-all duration-200 hover:border-white/60 h-10 sm:h-11 lg:h-auto"
                            />
                            {/* Password Field */}
                            <label
                                htmlFor="password"
                                className="inline-flex z-1 tracking-wider text-xs sm:text-sm lg:text-sm text-white/85 mt-1"
                            >
                                Contraseña
                            </label>
                            <div className="relative z-1">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Crea una contraseña segura"
                                    className="border-white/10 text-xs sm:text-sm lg:text-sm rounded-lg autofill:bg-[#1c1c1e]
                                     bg-[#1c1c1e] text-white placeholder:text-white/60
                                    focus:border-white/70 focus:ring-2 focus:ring-white/20
                                     transition-all duration-200 hover:border-white/60 pr-12 h-10 sm:h-11 lg:h-auto"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors duration-200"
                                >
                                    {showPassword ? (
                                        <EyeOff size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    ) : (
                                        <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    )}
                                </button>
                            </div>
                            {/* Confirm Password Field */}
                            <label
                                htmlFor="confirmPassword"
                                className="inline-flex z-1 tracking-wider text-xs sm:text-sm lg:text-sm text-white/85 mt-1"
                            >
                                Confirmar contraseña
                            </label>
                            <div className="relative z-1">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirma tu contraseña"
                                    className="border-white/10 text-xs sm:text-sm lg:text-sm rounded-lg autofill:bg-[#1c1c1e]
                                     bg-[#1c1c1e] text-white placeholder:text-white/60
                                    focus:border-white/70 focus:ring-2 focus:ring-white/20
                                     transition-all duration-200 hover:border-white/60 pr-12 h-10 sm:h-11 lg:h-auto"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors duration-200"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    ) : (
                                        <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    )}
                                </button>
                            </div>
                            {/* Terms and Conditions */}
                            <div className="mt-1 sm:mt-2 lg:mt-2 flex flex-col gap-2">
                                <span className="text-xs sm:text-xs lg:text-xs inline-flex z-1 text-white/60 leading-relaxed text-center sm:text-left">
                                    Al crear una cuenta, aceptas nuestros{" "}
                                    <span className="text-white/80 cursor-pointer hover:text-white transition-colors duration-200 underline ml-1">
                                        Términos y Condiciones
                                    </span>
                                    <span className="mr-1 sm:mr-5"> y </span>
                                    <span className="text-white/80 cursor-pointer hover:text-white transition-colors duration-200 underline">
                                        Política de Privacidad
                                    </span>
                                </span>
                            </div>
                            {/* Action Buttons */}
                            <div className="mt-3 sm:mt-4 lg:mt-4 w-full flex flex-col justify-start items-center gap-2 sm:gap-3 lg:gap-3 divider">
                                <Button
                                    className="w-full bg-white text-black rounded-xl hover:text-black hover:bg-white
                                cursor-pointer hover:shadow-md hover:shadow-white/20
                                transition-all duration-200 h-10 sm:h-11 lg:h-auto text-xs sm:text-sm lg:text-md"
                                    variant={"default"}
                                >
                                    Crear cuenta
                                </Button>
                                <div className="flex items-center gap-4 w-full">
                                    <Separator className="flex-1 bg-white/20" />
                                    <span className="text-white/60 text-xs sm:text-sm lg:text-sm">o</span>
                                    <Separator className="flex-1 bg-white/20" />
                                </div>
                                <Button
                                    className="bg-transparent w-full border border-white/10 rounded-xl hover:bg-transparent hover:border-white/20
                                    cursor-pointer text-white/80 hover:text-white transition-all duration-200 h-10 sm:h-11 lg:h-auto text-xs sm:text-sm lg:text-md"
                                    variant={"ghost"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate("/login")
                                    }}
                                >
                                    ¿Ya tienes cuenta? Inicia sesión
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
