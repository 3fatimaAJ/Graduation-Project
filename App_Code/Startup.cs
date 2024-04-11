using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(F.Project.Startup))]
namespace F.Project
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
