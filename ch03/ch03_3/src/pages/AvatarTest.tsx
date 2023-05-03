import {Div, Title, Avatar} from '../components'
import * as D from '../data'

export default function AvatarTest() {
    const avatars = D.target(0, 10).map(index => {
        <Avatar
            className='inline-block -ml-6 border-4 border-white'
            key={index}
            src={D.randomAvatar()} />
    })
    return (
        <section className='mt-4'>
            <Title> AvatarTest </Title>
            <Div className='px-12 m-8 bg-blue-300 py'> {avatar} </Div>
        </section>
    )
}