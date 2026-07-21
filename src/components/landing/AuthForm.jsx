
export const AuthForm = ({ authProps }) => {
    const { tab, setTab, role, setRole, formData, handleChange, handleSubmit, loading, error } = authProps
    return (
        <section className='flex-1 p-10 bg-white'>

            <Tabs
                activeTab={tab}
                onChange={setTab}
                options={[
                    { value: 'login', label: 'Iniciar sesión' },
                    { value: 'register', label: 'Crear cuenta' },
                ]}

            />


            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>

                {tab === 'register' && (
                    <>
                        <div
                            role="radiogroup"
                            aria-label="¿Quién va a usar Al Trote?"
                            className="flex gap-3"
                        >
                            <RoleCard
                                icon={<Icon icon="mdi:account-tie-outline" width="24" height="24" />}
                                label="Padre/Tutor"
                                selected={role === 'padre'}
                                onClick={() => setRole('padre')}
                            />
                            <RoleCard
                                icon={<Icon icon="mdi:account-school-outline" width="24" height="24" />}
                                label="Hijo/Estudiante"
                                selected={role === 'hijo'}
                                onClick={() => setRole('hijo')}
                            />
                        </div>

                        <Input
                            label="Nombre completo"
                            type="text"
                            placeholder="Tu nombre"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </>
                )}

                <Input
                    label="Correo electrónico"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    label="Contraseña"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {tab === 'login' && (
                    <a href="#" className="block text-right text-sm font-semibold text-primary hover:underline">
                        ¿Olvidaste tu contraseña?
                    </a>
                )}
                {tab === 'register' && (
                    <Checkbox
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        required
                    >
                        Acepto los{' '}
                        <a href="#" className="text-primary underline">términos y condiciones</a>{' '}
                        y la{' '}
                        <a href="#" className="text-primary underline">política de privacidad</a>{' '}
                        de la familia.
                    </Checkbox>
                )}

                <Button type="submit" variant={tab === 'login' ? 'primary' : 'primary'}>
                    {tab === 'login' ? 'Entrar' : 'Registrarme ahora'}
                </Button>


                <div role="separator" aria-label="o continua con" className="flex items-center gap-3 my-2">
                    <span className="flex-1 h-px bg-neutral-lighter" />
                    <span className="text-xs text-neutral-light">O CONTINÚA CON</span>
                    <span className="flex-1 h-px bg-neutral-lighter" />
                </div>


                <div className="flex gap-3">
                    <Button variant="social" className="flex-1">
                        <Icon icon="logos:google-icon" width="18" height="18" />
                        Google
                    </Button>

                    <Button variant="social" className="flex-1">
                        <Icon icon="mdi:apple" width="20" height="20" />
                        Apple
                    </Button>

                </div>
                <div>
                    <h4 className='text-xs mt-10 text-center font-bold text-primary'> © 2026 Al Trote. Hecho con ♡ para familias organizadas.</h4>
                </div>

            </form>
        </section>
    )
}
