import React from 'react';
import { RouteComponentProps } from 'react-router';
import { store } from '../store/store';
import { showMessage } from '../store/slices/UserMessageSlice';

export const Clients: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {

    //const user = useSelector((state: RootState) => state.user.user)
    //const [clients, setClients] = useState<any>({});

    // useEffect(() => {
    //     axios.get("https://api.mattgerega.net/unifi/ipmanager/client", {
    //         headers: {
    //             Authorization: `Bearer ${user?.}`
    //         }
    //     }).then((result) => {
    //         console.log(result.data);
    //         setClients(result.data);
    //     });
    // }, [user]);
    const testMessage = (): void => {
        store.dispatch(showMessage({
            messageType: "info",
            message: "HI!!!!"
        }));
    }

    return (
        <div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Private Page</h2>
                            <p className="lead">This page is private</p>
                            <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                            <button onClick={testMessage} className="btn btn-primary">Test Alert Message</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
