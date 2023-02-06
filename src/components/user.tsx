export default function User({ user }: any) {
    return (
        <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}