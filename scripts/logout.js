import { redirect } from 'next/navigation';

function logout() {
    localStorage.removeItem('user-data');

    return redirect('/login');
};

export default logout;