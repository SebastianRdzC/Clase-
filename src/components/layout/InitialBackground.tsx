type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function InitialBackground({ children, className }: Props) {
    return (
        <>
            <div className={`w-full h-full absolute  ${className}`}>
                <div className="w-full h-screen fixed">
                    

                </div>

            </div>
            {children}
        </>

    )

}