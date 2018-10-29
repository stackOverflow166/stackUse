export const someSchema = GroupOptions => ({
    type: 'object',
    required: [
        'groups', 'users',
    ],
    properties: {
        groups: {
            title: 'Group',
            enum: GroupOptions.map(i=> i.id),
            enumNames: GroupOptions.map(n => n.name),
        },
        users: {
            title: 'Type',
            enum: [],
            enumNames: [],
        },
    },
});

export const someUISchema = () => ({
    groups: {
        'ui:autofocus': true,
        'ui:options': {
            size: {
                lg: 15,
            },
        },
    },
    types: {
        'ui:options': {
            size: {
                lg: 15,
            },
        },
    },

});
