// Midleware ou Chain of Responsability
const pass1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const pass2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const pass3 = ctx => ctx.valor3 = 'mid3'

const exc = (ctx, ...middlewares) => {
    const excPass = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](ctx, () => excPass(index + 1))
    }
    excPass(0)
}

const ctx = {}
exc(ctx, pass1, pass2, pass3)
console.log(ctx)