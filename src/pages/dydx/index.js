import Layout from '../../layouts';

import Page from '../../components/Page';
import { METAINFO } from '../../constant';

const journalIcon = "/assets/imgs/dydx/dydx-journal.jpg";
const analyticsIcon = "/assets/imgs/dydx/dydx-analytics.jpg";

DydxPage.getLayout = function getLayout(page) {
    return <Layout variant="dydx">{page}</Layout>;
};

// eslint-disable-next-line arrow-body-style
export default function DydxPage () {
    return (
        <Page title={METAINFO.DYDX.title} description={METAINFO.DYDX.title} twitter={METAINFO.DYDX.twitter}>
            <section className="sm:min-w-[768px] lg:w-[1056px] flex flex-col justify-center items-center m-auto sm:absolute sm:top-[64px] sm:bottom-[64px] sm:right-0 sm:left-0 mt-[85px] md:mt-0">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-8 px-5 sm:px-0">
                    {/* <div className="border-[20px] border-header rounded-2md m-8">
                    <img src={journalIcon}></img>
                </div> */}
                    <img src={journalIcon} className="border-[20px] border-header rounded-2md mb-6 sm:m-8 w-full sm:w-[200px] sm:h-[200px] mx-auto shadow-small" />
                    <div className="mx-0 my-0 sm:m-8">
                        <div className="dydx-journal-header">dYdX v3 Trading Journal</div>
                        <div className="text-primary text-sm sm:text-base font-medium leading-6">
                            Thanks to dYdX grants, we introduced our MVP <a href="https://www.dydxtradingjournal.app/login" target="_blank" rel="noreferrer"><span className="text-green cursor-pointer">dYdX v3 Trading Journal</span></a>,
                            which has since received tremendous community feedback.
                            This tool aids traders in understanding their trading activities, with the current version requiring API keys for access. Excitingly,
                            we&apos;re on the brink of upgrading to dYdX v4, promising enhanced features and a smoother user experience. Stay tuned for a transformative
                            trading tool tailored to the dYdX v4 advancements.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-start justify-between px-5 sm:px-0 my-8 sm:my-0">
                    <div className="mx-0 my-0 sm:m-8">
                        <div className="dydx-analytics-header">dYdX v3 Volume Analytics</div>
                        <div className="text-primary text-sm sm:text-base font-medium leading-6">
                            Our <a href="/dydx/v3/volume" target="_blank" rel="noreferrer"><span className="text-green cursor-pointer">dYdX v3 Volume Analytics Dashboard</span></a>,
                            crafted as a demo for our upcoming v4 Analytics Dashboard release, capitalizes on the rich
                            volume data of dYdX v3. Its standout feature is the combined market volume presentation, a sought-after insight not found elsewhere.
                            This tool empowers traders to pinpoint significant market peaks and troughs, facilitating a deeper understanding of crucial buying
                            and selling events. While currently only showing v3 volume data, it offers a teaser of what&apos;s in store for v4.
                        </div>
                    </div>
                    <img src={analyticsIcon} className="w-full sm:w-[200px] sm:h-[200px] mx-auto border-[20px] border-header rounded-2md mb-6 sm:m-8 shadow-small" />
                    {/* <div className="border-[20px] border-header rounded-2md m-8">
                    <img src={analyticsIcon}></img>
                </div> */}
                </div>
            </section>
        </Page>
    )
}