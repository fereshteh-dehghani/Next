export default function FirstPost({data}) {
    return (
        <>
            <h1>second post page !</h1>
            <p>this is a test paragraph</p>
        </>
    )
}
//This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("url");
    const data = await res.json();

    // Pass data to the page via props
    return { prrops: { data } }
}