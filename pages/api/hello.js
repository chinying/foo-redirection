// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello(req, res) {
  const redirectUrl = req.query.redirect_url
  res.redirect(redirectUrl);
}
