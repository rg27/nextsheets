export const getStaticPaths = async () => {
    const res = await fetch('https://v1.nocodeapi.com/thebro/google_sheets/TylXJHhzDykyXfXk?tabId=Sheet1');
    const results = await res.json();

    const paths = results.data.map(ninja => {
        return{
            params: {id:ninja.id.toString()}
        }
    })

    return {
        paths:paths,
        fallback:false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://v1.nocodeapi.com/thebro/google_sheets/TylXJHhzDykyXfXk?tabId=Sheet1/' +id);
    const data = await res.json();

    return{
        props:{ninja:data}
    }
     
}
const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.data.Name}</h1>
            <h1>{ninja.data.Email}</h1>
            <h1>{ninja.data.Age}</h1>
        </div>
      );
} 
 
export default Details;