export default function Serverinfo() {
    const servertime = new Date().toLocaleString();
    return (
        <div>
            <p>Server Time: {servertime}</p>
        </div>
    )
}