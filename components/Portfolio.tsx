import React from 'react';

export function Portfolio() {
    return (
        <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <h3 className="font-display text-4xl md:text-5xl text-center mb-12 text-text-light dark:text-text-dark">Our Portfolio of Subsidiaries</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="card-gradient-1 text-white p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                        <img alt="Architectural blueprint pattern" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8dwKRBRRF-ecdJnARZDsX0SG4o1GAEzx5XS9pDklz9YuEFs41IN2D06-I8MADURmOyLNO0eUp_a3dzn-1boTo_TCq3BkJ2x5WgNdKr3A88MJeFRCSv6A2x1KKIzOUJsK6SyYfRnx96XQPCi68h8Oy0DrIR3_3KMhJAg5qMQSAh2lfzlKtdBlJeGvwH3xceFj_rKrG1GGiycWoQUcDLA3xLbKueBYINUBlI1Lwv5NFACIiooWRq53UsLlsLk8YqGQNYxs-J6I81KrH" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
                                <span className="font-body text-sm">Architectural</span>
                                <span className="material-icons-outlined">arrow_forward</span>
                            </div>
                            <h4 className="font-display text-3xl">Shahin Architecture</h4>
                            <p className="font-body text-sm mt-1">Avant-Garde Design &amp; Master Planning</p>
                        </div>
                        <p className="relative z-10 font-body text-sm text-white/80">Award-winning architectural solutions for luxury residences and commercial landmarks.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="card-gradient-2 text-white p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                        <img alt="Cityscape silhouette pattern" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh7CJF1lyhsNm98CNkdmV0i7Vt3EesvsBFauDWerdH2mJxOM_R9ZGYvelaHF6Do-FJPEnF_pT5MVA2JWppu0ubXUintjMyNRguJY6Vy9OglNwHqw1Oi0vp0HyY7DULJDkksnuCMcqkp9hloop9z71ocDexAGZJsi_Zdmn6RNYbXMxVPkbjKC4jc1_1ecrhxQVCiIxcDspwD95YjhKr5NHYjMIvNbAihsT6sljVGunpaVcRujp0lRgaK8Vixh4Jv54MEmfOCCbbczNG" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
                                <span className="font-body text-sm">Development</span>
                                <span className="material-icons-outlined">arrow_forward</span>
                            </div>
                            <h4 className="font-display text-3xl">Shahin Development</h4>
                            <p className="font-body text-sm mt-1">High-End Real Estate Investments</p>
                        </div>
                        <p className="relative z-10 font-body text-sm text-white/80">Crafting premium living and commercial spaces in prime locations.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="card-gradient-3 text-white p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                        <img alt="Structural engineering detail pattern" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvxSGJTXddHdeHHVimEUG46HvNjOpEVaZVmP6Yrw8XeDgdwOkvdGhtL6avyFiK6s5V05PM7AmLOKqGKwyx2IhDnFfiy_tToXs5gBqZ0uYmCKJZaF3fRiV0iRnWzthNYvv1v6cHj-FneAt5jfZc22TEUynJ78saVriIsIu6BN7jl-6P_xewZb56426Xna-IxbFoexNKVqsxw3g7FgUD9KKYFsHJpZVCPFl1wCN-f2ca54pMBtqsetdDK5vak7LtevQUPBotPQE7c683" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
                                <span className="font-body text-sm">Construction</span>
                                <span className="material-icons-outlined">arrow_forward</span>
                            </div>
                            <h4 className="font-display text-3xl">Shahin Construction</h4>
                            <p className="font-body text-sm mt-1">Precision Engineering &amp; Build</p>
                        </div>
                        <p className="relative z-10 font-body text-sm text-white/80">Delivering excellence in construction with state-of-the-art techniques.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="card-gradient-4 text-white p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                        <img alt="Digital media camera lens pattern" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY7welrf_52jGG-UwRjR6SDV36qWtPDETQeDgwx51FGa-QgfOB2fUsemD9V5YwDAC_dW6-Td33q61EkcXY4kMt37Bv5uy59Sz-KCM8FkfWqFaBVrLuFeRpUawDT5sTV4Zbt-tDL5_wHaEyJvffDQDmaT8vQKkick_SXjmQa6G-7PrYdJHB8feNcufXcBpFRKpSkzex0sV_RWwH-nfAxsM49mz-pRH7y-5qV8H9lP73Ff4MRIrw5dI0-TVP9xDt2cU_3lRJ8HdIFV5v" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
                                <span className="font-body text-sm">Media</span>
                                <span className="material-icons-outlined">arrow_forward</span>
                            </div>
                            <h4 className="font-display text-3xl">Shahin Media</h4>
                            <p className="font-body text-sm mt-1">Global Content &amp; Digital Innovation</p>
                        </div>
                        <p className="relative z-10 font-body text-sm text-white/80">Producing impactful media and digital experiences across platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
