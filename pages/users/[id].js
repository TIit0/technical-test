import Image from "next/image";

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersArr = await response.json();

    const paths = usersArr.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user = await response.json();
    const {gravatar} = await import("/utils/gravatar.json")

    const userWithImg = {...user, img: gravatar[user.id].img}
    
    return {
        props: {userWithImg}
    }
}

export default function user({userWithImg}) {
    
    return (
        <div>
            <Image
                        src={userWithImg.img}
                        alt="User picture"
                        width={300}
                        height={300}/>
            <h1>{userWithImg.name}</h1>
            <p>{userWithImg.email}</p>
            <p>{userWithImg.address?.city}</p>
            <p>{userWithImg.company?.name}</p>
            <p>{userWithImg.website}</p>
        </div>
    )
}