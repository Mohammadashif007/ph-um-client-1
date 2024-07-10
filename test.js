export const adminPath2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "ADMIN DASHBOARD",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "createAdmin",
                element: "CREATE ADMIN",
            },
            {
                name: "Create Faculty",
                path: "createFaculty",
                element: "CREATE FACULTY",
            },
            {
                name: "Create Student",
                path: "createStudent",
                element: "CREATE STUDENT",
            },
        ],
    },
];

const newArray = adminPath2.reduce((acc, item) => {
    if (item.name && item.element) {
        acc.push({
            key: item.name,
            label: "NavLink",
        });
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => {
                return {
                    key: child.name,
                    label: "NavLInk",
                };
            }),
        });
    }
    return acc;
}, []);

// const newArray = adminPath2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }
//     if(item.children){
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// }, []);

console.log(JSON.stringify(newArray));
