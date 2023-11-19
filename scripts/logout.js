import { redirect } from 'next/navigation';

function logout() {
    const { reload } = useRouter();

    localStorage.removeItem('user-data');

    return redirect('/login');
};

export default logout;