export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90b536132ee704045727cbde50b03651'),
  },
});
