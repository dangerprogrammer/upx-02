import { redirect } from 'next/navigation';

function logout() {
    const { redirect } = useRouter();

    localStorage.removeItem('user-data');

    return redirect('/login');
};

export default logout;