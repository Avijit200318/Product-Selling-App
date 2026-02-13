import { Session } from "@supabase/supabase-js"
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { suparbase } from "@/lib/superbase";

type AuthData = {
    session: Session | null,
    mounting: boolean,
    user: any
}

const AuthContext = createContext<AuthData>({
    session: null,
    mounting: true,
    user: null
})


export const AuthPorvider = ({children}: PropsWithChildren) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState(null);
    const [mounting, setMounting] = useState<boolean>(true);


    useEffect(() => {
        const fetchSession = async () => {
            const {data: {session}} = await suparbase.auth.getSession();

            setSession(session);

            if(session){
                const {data: user, error} = await suparbase.from('users').select('*').eq('id', session.user.id).single();

                if(error){
                    console.error('error: ', error)
                } else{
                    setUser(user)
                }
            }
            setMounting(false);
        }

        fetchSession();
        suparbase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, []);

  return (
    <AuthContext.Provider value={{session, mounting, user}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)