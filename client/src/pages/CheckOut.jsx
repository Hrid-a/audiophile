import { useNavigate } from 'react-router-dom';
import Wrapper from "../components/Wrapper";
import CustomerDetails from '../components/CustomerDetails';
import Summary from '../components/Summary';
import { useSelector } from 'react-redux';
import ThankYouMessage from '../components/ThankYouMessage';


const CheckOut = () => {
    const navigate = useNavigate();
    const { order, status } = useSelector(state => state.order);

    return (
        <>
            <div className='bg-[#F1F1F1]'>
                <Wrapper>
                    <div className="my-8">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(-1);
                            }}
                            className="uppercase text-secondary opacity-80 font-medium">
                            go back
                        </button>
                    </div>

                    <section className='flex gap-8 flex-col lg:flex-row items-start'>
                        <CustomerDetails />
                        <Summary />
                    </section>
                    {status === "success" && <div className="fixed top-[50%] lg:top-[50%] -translate-y-[50%]  left-[50%] -translate-x-[50%]  z-20">
                        <ThankYouMessage order={order} />
                    </div>}
                </Wrapper>
            </div>

            {
                status === "success" && <div className="fixed inset-0 bg-[#00000040] h-screen   z-10"></div>
            }
        </>
    )
}

export default CheckOut