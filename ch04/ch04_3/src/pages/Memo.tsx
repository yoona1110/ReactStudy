import { useMemo } from "react";
import { Title, Avatar} from '../components'
import * as D from '../data'

// useMemo : 데이터를 캐시하는 용도
// 의존성에 변화가 생길 떄마다 콜백함수를 자동으로 호출하여 의존성을 반영함.
// 보통 콜백함수는 한번만 호출되면 충분하기 때문에 의존성 목록은 의존성이 전혀 없음을 의미하는 []로 사용

export default function Memo() {
    //prettier-ignore
    const headTexts = useMemo<string[]>(() => [
        'No.', 'Name', 'Job Title', 'Email Adress'
    ], [])
    const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

    const head = useMemo(() =>
        headTexts.map(text => <th key={text}> {text} </th>), 
        [headTexts]
    )

    const body = useMemo(() => 
        users.map((user, index) => (
            <tr key={user.uuid}>
                <th> {index + 1} </th>
                <td className='flex items=-center'>
                    <Avatar src={user.avatar} size='1.5rem'/>
                    <p className='ml-2'> {user.name} </p>
                </td>
                <td> {user.jobTitle} </td>
                <td> {user.email} </td>
            </tr>
        )),
        [users]
    )

    return (
        <div className='mt-4'>
            <Title> Memo </Title>
            <div className='p-4 mt-4 overflow-x-auto'>
                <table className='table w-full table-zebra table-compact'>
                    <thead>
                        <tr> {head} </tr>
                    </thead>
                    <tbody> {body} </tbody>
                </table>
            </div>
        </div>
    )
}