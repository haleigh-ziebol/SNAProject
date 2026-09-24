import { defineContract } from '@prisma/orm-postgres/contract-builder';

export const contract = defineContract({}, ({ field, model, rel }) => {

const Plant = model('Plant', {
    fields: {
      id: field.id.uuidv7String(),
      scientificName: field.text(),
      commonName: field.text(),
      growthHabit: field.text(),
      duration: field.text(),
      status: field.text(),
      family: field.text().optional(),
      oldScientificNames: field.text().optional(),
      taxonId: field.text().optional(),
      usdaCode: field.text().optional(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });

  const SNA = model('SNA', {
    fields: {
      id: field.id.uuidv7String(),
      name: field.text(),
      county: field.text().optional(),
      section: field.text().optional(),
      subsection: field.text().optional(),
      dnrId: field.text().optional(),
      location: field.text().optional(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });

  const SNAPlant = model('SNAPlant', {
    fields: {
      id: field.id.uuidv7String(),
      plantId: field.uuidString(),
      snaId: field.uuidString(),
      createdAt: field.temporal.createdAtString(),
      updatedAt: field.temporal.updatedAtString(),
    },
  });

  return {
    models: {
      Plant: Plant.relations({
      snas: rel.manyToMany(SNA, {
        through: SNAPlant,
        from: 'plantId',
        to: 'snaId',
      }),
    }),

    SNA: SNA.relations({
      plants: rel.manyToMany(Plant, {
        through: SNAPlant,
        from: 'snaId',
        to: 'plantId',
      }),
    }),

    SNAPlant: SNAPlant.relations({
      plant: rel.belongsTo(Plant, {
        from: 'plantId',
        to: 'id',
      }),

      sna: rel.belongsTo(SNA, {
        from: 'snaId',
        to: 'id',
      }),
      }),
    },
  };
});

