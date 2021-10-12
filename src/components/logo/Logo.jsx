
export default function Logo({type = "default"}){
    return (
        <div>
            <img src={type == "muted" ? "/images/logo-muted.svg" : "/images/logo.svg"} alt="logo" />
        </div>
    );
}