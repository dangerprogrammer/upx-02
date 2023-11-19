import { redirect } from 'next/navigation';

function logout() {
    localStorage.removeItem('user-data');
    
    return redirect('/');
};

export default logout;