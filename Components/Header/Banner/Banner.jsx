import classes from './Banner.module.css'
const Banner = () => {
    return (
        <section className={classes.banner}>
            <article className='p-20'>
                <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <article className=''>
                        <div className={classes.headerText}>
                            <h1 className="text-2xl font-bold mb-10">
                                Find The Best Monthly Payment
                            </h1>
                            <p className='mb-10'>Apply for our buisness loan in minuets, without painful</p>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <button className={classes.start}>GET STARTED</button>
                            </div>
                            <div>
                                <button className={classes.work}>HOW IT WORK</button>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className={classes.card}>
                            <h1 className='text-xl text-center font-bold mb-10'>How much do you need</h1>
                            <div className=''>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className='mb-3'>Ammount of Money ($):</p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p className='mb-3'>How long for (day):</p>
                                        <input type="text" />
                                    </div>
                                    <div className='col-span-2'>
                                        <p className='mb-3'>Repayment:</p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p className='mb-3'>Name:</p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p className='mb-3'>Phone:</p>
                                        <input type="text" />
                                    </div>
                                    <div className='col-start-1'>
                                        <button>GET YOUR LOAN NOW!</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>
                </div>
            </article>

        </section>
    )
}

export default Banner